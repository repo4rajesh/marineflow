import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const post = await prisma.post.findFirst({
      where: {
        OR: [
          { id: params.slug },
          { slug: params.slug }
        ]
      },
      include: {
        author: true,
        category: true,
        tags: true,
      },
    });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json({ error: 'Error fetching post' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const body = await request.json();
    const { title, slug, content, excerpt, image, categoryId, tagIds } = body;

    const post = await prisma.post.update({
      where: {
        id: params.slug, // Using the slug parameter as ID for updates
      },
      data: {
        title,
        slug,
        content,
        excerpt,
        image,
        categoryId,
        tags: {
          set: tagIds.map((id: string) => ({ id })),
        },
      },
      include: {
        author: true,
        category: true,
        tags: true,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json(
      { error: 'Error updating post' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await prisma.post.delete({
      where: {
        id: params.slug, // Using the slug parameter as ID for deletion
      },
    });

    return NextResponse.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { error: 'Error deleting post' },
      { status: 500 }
    );
  }
} 