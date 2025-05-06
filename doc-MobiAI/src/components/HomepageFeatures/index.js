import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'IA de Extração',
    image: 'img/extraction-ai.svg',
    description: (
      <>
        Automação da coleta de dados de PDFs e documentos do setor automotivo,
        eliminando o trabalho manual e reduzindo erros humanos.
      </>
    ),
  },
  {
    title: 'IA de Notícias',
    image: 'img/news-ai.svg',
    description: (
      <>
        Identificação e curadoria inteligente das notícias mais relevantes do setor,
        fornecendo análises contextualizadas e tendências de mercado.
      </>
    ),
  },
  {
    title: 'Gerador de Slides',
    image: 'img/slides-generator.svg',
    description: (
      <>
        Criação automática de apresentações profissionais com dados estruturados 
        e formatação padronizada, prontas para uso corporativo.
      </>
    ),
  },
  {
    title: 'Newsletter Automática',
    image: 'img/newsletter.svg',
    description: (
      <>
        Distribuição de relatórios por e-mail com conteúdo personalizado
        e design moderno, mantendo stakeholders sempre atualizados.
      </>
    ),
  },
  {
    title: 'Automação Excel',
    image: 'img/excel-automation.svg',
    description: (
      <>
        Processamento e organização automática de dados em planilhas Excel,
        com cálculos, gráficos e análises comparativas prontas para uso.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <img
            className={styles.featureImage}
            src={image}
            alt={title}
          />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className={styles.sectionTitle}>Nossa Solução</h2>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}