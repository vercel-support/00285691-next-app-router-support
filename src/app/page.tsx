import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Main Page</h1>
      <div className="flex flex-col items-center *:underline">
        <Link href="/product">Move to Product Page</Link>
        <Link href="/product/46042092/Mothtech 오가닉 코튼 티셔츠">Move to Product Detail Page</Link>
      </div>
    </main>
  );
}
