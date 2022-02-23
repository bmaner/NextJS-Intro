import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();
  return (
    //Link 태그는 오로지 href를 위해서 사용하고
    //스타일 적용 등 다른 처리를 위해서 a로 네비게이션 text를 감싸주어야 함
    <nav>
      <Link href="/">
        <a
          className={`${styles.link} ${
            router.pathname === '/' ? styles.active : ''
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={[
            styles.link,
            router.pathname === '/about' ? styles.active : '',
          ].join(' ')}
        >
          About
        </a>
      </Link>
    </nav>
  );
}
