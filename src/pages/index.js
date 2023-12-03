import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import Layout from '@theme/Layout';

const HomePage = () => {
  const [isScriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const loadScripts = async () => {
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/0.158.0/three.min.js');
      await loadScript('https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.dots.min.js');
      setScriptLoaded(true);
    };

    loadScripts();

    return () => {
    };
  }, []);

  useEffect(() => {
    if (isScriptLoaded) {
      VANTA.DOTS({
        el: "#main",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xa9d3d6,
        backgroundColor: 0x0A1414,
        showLines: false
      });
    }
  }, [isScriptLoaded]);

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  return (
    <Layout>
      <div id="main" className={styles.main}>
        <div className={styles.wrap}>
          <div className={styles.title}>
            <h1>Biggest <span className={styles.tcolor}>Higher Study Abroad</span> Wiki</h1>
          </div>
          <div className={styles.tagline}>
            <p>for Bangladeshi students, by Bangladeshi students</p>
          </div>
          <a href="/docs/overview" className={styles.mainBtn}>
            Delve Into Insanity
          </a>
        </div>
      </div>  
    </Layout>
    
  );
};

export default HomePage;