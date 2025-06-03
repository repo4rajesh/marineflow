import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '5');
    const skip = (page - 1) * limit;

    console.log('Fetching posts with pagination:', { page, limit, skip });

    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          author: {
            select: {
              name: true,
            },
          },
          category: {
            select: {
              name: true,
            },
          },
        },
      }),
      prisma.post.count(),
    ]);

    console.log('Found posts:', { count: posts.length, total });

    return NextResponse.json({
      posts,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const { title, slug, content, excerpt, image, categoryId, tagIds, authorId } = data;

    const post = await prisma.post.create({
      data: {
        title,
        slug,
        content,
        excerpt,
        image,
        author: {
          connect: {
            id: authorId,
          },
        },
        category: {
          connect: {
            id: categoryId,
          },
        },
        tags: {
          connect: tagIds.map((id: string) => ({ id })),
        },
      },
      include: {
        author: {
          select: {
            name: true,
          },
        },
        category: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: 'Error creating post' },
      { status: 500 }
    );
  }
} 