import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Main Page</h1>
      <Link href="/product" className="underline">
        Move to Product Page
      </Link>
    </main>
  );
}
