// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MOBI AI - Market Report Automotivo',
  tagline: 'Automatização inteligente de relatórios para o setor automotivo',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://seudominio.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/mobi-ai-docs/',

  // GitHub pages deployment config
  organizationName: 'seuusuario', // Usually your GitHub org/user name.
  projectName: 'mobi-ai-docs', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/seuusuario/mobi-ai-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/seuusuario/mobi-ai-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Substitua com as cores da sua paleta corporativa
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'MOBI AI',
        logo: {
          alt: 'MOBI AI Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentação',
          },
          {
            to: '/blog', 
            label: 'Atualizações', 
            position: 'left'
          },
          {
            href: 'https://github.com/leotaborda/mobi-ai',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              {
                label: 'Visão Geral',
                to: '/docs/visao-geral',
              },
              {
                label: 'Arquitetura',
                to: '/docs/arquitetura',
              },
              {
                label: 'Tecnologias',
                to: '/docs/tecnologias',
              },
            ],
          },
          {
            title: 'Contato',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/leotaborda/mobi-ai',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/Leonardo/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MOBI AI - Market Report Automotivo. Desenvolvido com Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;