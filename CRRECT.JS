import React from 'react';
import ArrowIcon from '../../components/icons/arrow-icon';
import styles from './page.module.scss';
import cx from 'classnames';
import { Open_Sans, Cormorant } from 'next/font/google';
import Script from 'next/script';

const openSansConfig = {
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  styles: ['normal', 'italic'],
};

const cormorantConfig = {
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  styles: ['normal', 'italic'],
};

const openSans = Open_Sans(openSansConfig);
const cormorant = Cormorant(cormorantConfig);

import HeroSection from './heroSection';

const Home = () => (
  <div className={styles['home-component']}>
    <HeroSection />
    <section className={cx(styles.counts, 'parallax', styles.parallax, styles.home, cormorant.className)}>
      <div className={`container ${styles['publication-counts']}`}>
        <div className={styles.publication}>
          <h1 className={openSans.className}>53</h1>
          <h4 className={cormorant.className}>International Journals</h4>
        </div>
        <div className={styles.publication}>
          <h1 className={openSans.className}>109</h1>
          <h4 className={cormorant.className}>National Journals</h4>
        </div>
        <div className={styles.publication}>
          <h1 className={openSans.className}>24</h1>
          <h4 className={cormorant.className}>Technodaya Issues</h4>
        </div>
      </div>
    </section>
    <section className={styles.home}>
      <div className={`${styles['subscription-cont']} container`}>
        <h1>subscribe to our <br /> newsletter</h1>
        <h4 className={cormorant.className}>Stay updated with new Issues of Technodaya!</h4>
        <form>
          <div className={styles.inputs}>
            <input required type="text" placeholder="First Name" />
            <input required type="text" placeholder="Last Name" />
            <input required type="email" placeholder="Email" />
          </div>
          <button type="submit" className={styles.submit}>
            <div className={styles.circle}>
              <span><ArrowIcon /></span>
            </div>
            <h3>Subscribe</h3>
          </button>
        </form>
      </div>
    </section>

    <Script src="/js/parallax.js" strategy="beforeInteractive" />
    <Script src="/js/parallax.js" strategy="afterInteractive" />
  </div>
);

export default Home;
