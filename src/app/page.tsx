import Layout from '@/components/layout';
import styles from '../styles/home.module.css';
import utileStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
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

        <section>
          <h2>📝旅する限界エンジニアのBLOG</h2>
          <div className={styles.grid}>
            <article>
              <Link href={'/'}>
                <Image
                  alt="記事イメージ"
                  src="/images/thumbnail01.jpg"
                  width={200}
                  height={200}
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href={'/'} className={utileStyles.boldText}>
                アボカドをタネから育てて見た
              </Link>
              <br />
              <small className={utileStyles.lightText}>2025/01/01</small>
            </article>
            <article>
              <Link href={'/'}>
                <Image
                  alt="記事イメージ"
                  src="/images/thumbnail01.jpg"
                  width={200}
                  height={200}
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href={'/'} className={utileStyles.boldText}>
                アボカドをタネから育てて見た
              </Link>
              <br />
              <small className={utileStyles.lightText}>2025/01/01</small>
            </article>
            <article>
              <Link href={'/'}>
                <Image
                  alt="記事イメージ"
                  src="/images/thumbnail01.jpg"
                  width={200}
                  height={200}
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href={'/'} className={utileStyles.boldText}>
                アボカドをタネから育てて見た
              </Link>
              <br />
              <small className={utileStyles.lightText}>2025/01/01</small>
            </article>
            <article>
              <Link href={'/'}>
                <Image
                  alt="記事イメージ"
                  src="/images/thumbnail01.jpg"
                  width={200}
                  height={200}
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href={'/'} className={utileStyles.boldText}>
                アボカドをタネから育てて見た
              </Link>
              <br />
              <small className={utileStyles.lightText}>2025/01/01</small>
            </article>
          </div>
        </section>
      </Layout>
    </>
  );
}
