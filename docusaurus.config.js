// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Beyond Borders Wiki',
  tagline: 'for Bangladeshi students, by Bangladeshi students',
  favicon: 'img/logo.ico',

  // Set the production url of your site here
  url: 'https://beyondborders.wiki/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields:{
    mendableAnonKey: "a7701478-a31f-4ee6-97e1-006f8bfcd547",
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MY-Sabil/beyondborders-wiki/edit/main/',
          
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MY-Sabil/beyondborders-wiki/edit/main/',

          path: 'guides',
          routeBasePath: 'guides',
          blogTitle: 'Guides',
          blogSidebarTitle: 'Recent guides'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-PBXXLHH64B',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-banner.png',
      navbar: {
        title: 'Beyond Borders Wiki',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'left',
            label: 'Wiki',
          },
          {
            to: '/guides',
            label: 'Guides', 
            position: 'left',
          },
          {
            to: '/docs/usa/basics/tests/entrance-exams/sat/resources',
            label: 'SAT Resources', 
            position: 'left',
          },
          {
            to: '/college-list',
            label: 'College List',
            position: 'left',
          },
          {
            to: '/contribute',
            label: 'Contribute!',
            position: 'right',
          },
          {
            href: 'https://github.com/MY-Sabil/beyondborders-wiki',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Socials',
            items: [
              {
                label: 'Facebook',
                to: 'https://www.facebook.com/wiki.beyondborders',
              },
              {
                label: 'Discord',
                to: '#',
              },
            ],
          },
          {
            title: 'Contribute',
            items: [
              {
                label: 'How to contribute?',
                to: '/contribute',
              },
              {
                label: 'Github',
                href: 'https://github.com/MY-Sabil/beyondborders-wiki',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Our Story',
                to: '/about',
              },
              {
                label: 'Team',
                href: '/team',
              },
            ],
          },
        ],
        copyright: `<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://beyondborders.wiki/">Beyond Borders Wiki</a> is marked with <a href="http://creativecommons.org/publicdomain/zero/1.0?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC0 1.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/zero.svg?ref=chooser-v1"></a></p>`,
        
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
      }
    })
};

export default config;
