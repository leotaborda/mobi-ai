/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introdução',
    },
    {
      type: 'category',
      label: 'Visão Geral',
      items: ['visao-geral/sobre', 'visao-geral/objetivos'],
    },
    {
      type: 'category',
      label: 'Equipe',
      items: ['equipe/membros', 'equipe/funcoes'],
    },
    {
      type: 'category',
      label: 'Problema e Solução',
      items: ['problema-solucao/problema', 'problema-solucao/solucao'],
    },
    {
      type: 'category',
      label: 'Arquitetura da Solução',
      items: [
        'arquitetura/visao-geral',
        'arquitetura/ia-extracao',
        'arquitetura/ia-noticias',
        'arquitetura/gerador-slides',
        'arquitetura/newsletter',
        'arquitetura/automacao-excel',
      ],
    },
    {
      type: 'category',
      label: 'Tecnologias e Ferramentas',
      items: [
        'tecnologias/design',
        'tecnologias/frontend',
        'tecnologias/backend',
        'tecnologias/organizacao',
      ],
    },
    {
      type: 'doc',
      id: 'cronograma',
      label: 'Cronograma do Projeto',
    },
    {
      type: 'category',
      label: 'Riscos e Custos',
      items: ['riscos-custos/riscos', 'riscos-custos/custos'],
    },
    {
      type: 'doc',
      id: 'proximas-etapas',
      label: 'Próximas Etapas',
    },
  ],
};

module.exports = sidebars;