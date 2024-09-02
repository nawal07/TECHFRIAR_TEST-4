import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.registration}>
        <h1>Welcome To Registration Page </h1>
        <Link className={styles.link} href={'/register'}>
          {' '}
          Click here to register
        </Link>
      </div>
    </main>
  );
}
