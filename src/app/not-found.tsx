// src/app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>お探しのページは見つかりませんでした。</p>
      <Link href="/" style={styles.link}>
        トップページに戻る
      </Link>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center' as const,
    backgroundColor: '#f0f2f5',
  },
  title: {
    fontSize: '6rem',
    marginBottom: '1rem',
    color: '#333',
  },
  message: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    color: '#666',
  },
  link: {
    fontSize: '1.2rem',
    color: '#0070f3',
    textDecoration: 'underline',
  },
};
