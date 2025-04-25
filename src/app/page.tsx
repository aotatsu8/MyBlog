import Layout from '@/components/Layout';
import styles from '../styles/home.module.css';
import utileStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { getPostsData, PostData } from '@/lib/post';

export default async function Home() {
  // SSGの場合
  const allPostsData: PostData[] = await getPostsData();
  console.log(allPostsData);
  return (
    <>
      <Layout>
        <section className={utileStyles.headingMd}>
          <p>
            フリーランスエンジニアとして活動しているHachi8です。
            <br />
            このブログでは、日々の気づきや好きなことをゆるく綴っています。
            <br />
            趣味は旅行とカフェ巡り。そして最近ハマっているのは植物を種子から育てることです。
            <br />
            プログラミングやエンジニアの疑問はQiitaに投稿しているのでぜひそちらもご覧ください。
          </p>
        </section>

        <section className={`${utileStyles.headingMd} ${utileStyles.padding1px}`}>
          <h2>📝旅する限界エンジニアのBLOG</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, date, title, thumbnail }) => (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <Image
                    alt="記事イメージ"
                    src={thumbnail}
                    width={200}
                    height={200}
                    className={styles.thumbnailImage}
                  />
                </Link>
                <Link href={`/posts/${id}`} className={utileStyles.boldText}>
                  {title}
                </Link>
                <br />
                <small className={utileStyles.lightText}>{date}</small>
              </article>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
