import Image from 'next/image';
import React from 'react';
import styles from './layout.module.css';
import utileStyles from '../styles/utils.module.css';
import Link from 'next/link';

export const metadata = {
  title: '最初の投稿',
  openGraph: {
    images: [{ url: '/images/profile.png' }],
  },
  icons: { icon: '/fabicon.ico' },
};

export const name = 'Hachi8';

export default function Layout({ children, home }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              alt="プロフィール写真"
              src="/images/profile.png"
              width={200}
              height={200}
              className={utileStyles.borderCircle}
            />
            <h1 className={utileStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Image
              alt="プロフィール写真"
              src="/images/profile.png"
              width={100}
              height={100}
              className={utileStyles.borderCircle}
            />
            <h1 className={utileStyles.headingMd}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href={'/'}>⇦ ホームへ</Link>
        </div>
      )}
    </div>
  );
}
