import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Explorar Documentação
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="MOBI AI - Automatização inteligente de relatórios para o setor automotivo">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <h2 className="text--center margin-bottom--lg">
                  Revolucionando a Geração de Relatórios Automotivos
                </h2>
                <p className="text--center">
                  O MOBI AI automatiza todo o processo de criação do Market Report - 
                  da coleta de dados e notícias até a geração de apresentações e newsletters, 
                  reduzindo o tempo de produção e aumentando a qualidade das informações.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <HomepageFeatures />
        
        <section className={styles.cta}>
          <div className="container text--center">
            <h2>Quer conhecer mais sobre o projeto?</h2>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg margin-right--md"
                to="/docs/intro">
                Ver Documentação
              </Link>
              <Link
                className="button button--outline button--lg"
                href="https://github.com/leotaborda">
                GitHub
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}