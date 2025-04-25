import Image from 'next/image';
import React from 'react';
import styles from './layout.module.css';
import utileStyles from '../styles/utils.module.css';

export const metadata = {
  title: '最初の投稿',
  openGraph: {
    images: [{ url: '/images/profile.png' }],
  },
  icons: { icon: '/fabicon.ico' },
};

export const name = 'Hachi8';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          alt="プロフィール写真"
          src="/images/profile.png"
          width={200}
          height={200}
          className={utileStyles.borderCircle}
        />
        <h1 className={utileStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
