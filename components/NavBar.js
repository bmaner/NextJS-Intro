import Link from 'next/link';
import { useRouter } from 'next/router';
// import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();

  return (
    //Link 태그는 오로지 href를 위해서 사용하고
    //스타일 적용 등 다른 처리를 위해서 a로 네비게이션 text를 감싸주어야 함
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link href="/">
          <a
            className={router.pathname === '/' ? 'active' : ''}
            //   className={`${styles.link} ${
            //     router.pathname === '/' ? styles.active : ''
            //   }`}
          >
            Home
          </a>
        </Link>
        <Link href="/about">
          <a
            className={router.pathname === '/about' ? 'active' : ''}
            //   className={[
            //     styles.link,
            //     router.pathname === '/about' ? styles.active : '',
            //   ].join(' ')}
          >
            About
          </a>
        </Link>
      </div>
      <style jsx>{`
        .active {
          color: tomato;
        }
        nav {
          /* background-color: tomato; */
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100%;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
}
