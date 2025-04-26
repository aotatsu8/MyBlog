import { getPostData } from '@/lib/post';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata(props: any) {
  const params = await props.params; // ★ props.params を awaitする！！

  const postData = await getPostData(params.id);

  if (!postData) {
    notFound();
  }

  return {
    title: `${postData.title} | My Blog`,
    description: `${postData.title} に関する記事です。`,
  };
}
