import React from 'react';
import Image from 'next/image';
import logo from '../../img/logo.svg';
import styles from './Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const { route } = useRouter();

  const parseLocation = () => {
    if (route === '/') {
      return (
        <>
          <div role="separator" className={styles.separator}>
            /
          </div>

          <Link href="/">
            <a className={styles.breadcrumb}>Home</a>
          </Link>
        </>
      );
    }
    const urlArray = route.split('/');

    return urlArray.map((item, index) => {
      if (item.length !== 0) {
        const path = urlArray.slice(0, index + 1).join('/');

        return (
          <React.Fragment key={`${item}${index}`}>
            <div className={styles.separator}>/</div>
            <Link href={path}>
              <a className={styles.breadcrumb}>{item}</a>
            </Link>{' '}
          </React.Fragment>
        );
      }

      return null;
    });
  };

  return (
    <header>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.logo}>
            <Image src={logo} alt="logo" width={50} height={50} />
          </a>
        </Link>

        {parseLocation()}
      </nav>
    </header>
  );
};

export default Header;
