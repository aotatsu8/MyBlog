import { generateMetadata } from './metadata'; // ← ★ 追加！！！！

export { generateMetadata }; // ← ★ exportしてあげる！！

export const dynamicParams = false;
export const dynamic = 'force-dynamic';
import Layout from '@/components/Layout';
import { getPostData } from '@/lib/post';
import utileStyles from '../../../styles/utils.module.css';
import { notFound } from 'next/navigation';

// 各ページのパラメータを生成（SSG対象）
export default async function PostPage(props: any) {
  const params = await props.params; // ← props.paramsをawaitする！

  const postData = await getPostData(params.id);

  if (!postData) {
    notFound(); // ファイルなかったら即404
  }

  return (
    <Layout>
      <article>
        <h1 className={utileStyles.headingX1}>{postData.title}</h1>
        <div className={utileStyles.lightText}>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
      </article>
    </Layout>
  );
}
