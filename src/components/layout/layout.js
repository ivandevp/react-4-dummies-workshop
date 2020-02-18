import React from 'react';
import logo from '../../assets/bedu-logo.png';
import styles from './layout.module.css';

const Layout = ({ children }) => (
  <main>
    <header className={styles.header}>
      <h1>
        React 4 Dummies
      </h1>
      <figure>
        <a href="https://bedu.org" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Bedu" />
        </a>
      </figure>
    </header>
    <section className={styles.container}>
      {children}
    </section>
  </main>
);

export default Layout;
