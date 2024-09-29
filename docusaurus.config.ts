import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DIF Hackathon 2024',
  tagline: 'DIF Hackathon 2024',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://identity.foundation/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'decentralized-identity', // Usually your GitHub org/user name.
  projectName: 'hackathon-2024', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/dif-hackathon-banner.png',
    navbar: {
      title: 'Decentralized Identity Foundation',
      logo: {
        alt: 'DIF Logo',
        src: 'img/favicon.png',
      },
      items: [
        {
          label: 'Hackathon Timeline',
          to: '/docs/',
        },
        {
          label: 'Sponsors & Challenges',
          to: '/docs/sponsors',
        },
        {
          label: 'Educational Sessions',
          to: '/docs/educational-sessions',
        },
        {
          label: 'Resources',
          to: '/docs/resources',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Hackathon 2024',
          items: [
            {
              label: 'Hackathon Timeline',
              to: '/docs/',
            },
            {
              label: 'Sponsors & Challenges',
              to: '/docs/sponsors',
            },
            {
              label: 'Educational Sessions',
              to: '/docs/educational-sessions',
            },
            {
              label: 'Resources',
              to: '/docs/resources',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/zthV4WDR',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/DecentralizedID',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/decentralized-identity/hackathon-2024',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Decentralized Identity Foundation.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
