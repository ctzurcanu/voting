import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/voting/__docusaurus/debug',
    component: ComponentCreator('/voting/__docusaurus/debug', 'c28'),
    exact: true
  },
  {
    path: '/voting/__docusaurus/debug/config',
    component: ComponentCreator('/voting/__docusaurus/debug/config', '36e'),
    exact: true
  },
  {
    path: '/voting/__docusaurus/debug/content',
    component: ComponentCreator('/voting/__docusaurus/debug/content', 'aa9'),
    exact: true
  },
  {
    path: '/voting/__docusaurus/debug/globalData',
    component: ComponentCreator('/voting/__docusaurus/debug/globalData', 'e2b'),
    exact: true
  },
  {
    path: '/voting/__docusaurus/debug/metadata',
    component: ComponentCreator('/voting/__docusaurus/debug/metadata', 'cc4'),
    exact: true
  },
  {
    path: '/voting/__docusaurus/debug/registry',
    component: ComponentCreator('/voting/__docusaurus/debug/registry', '1ba'),
    exact: true
  },
  {
    path: '/voting/__docusaurus/debug/routes',
    component: ComponentCreator('/voting/__docusaurus/debug/routes', '213'),
    exact: true
  },
  {
    path: '/voting/blog',
    component: ComponentCreator('/voting/blog', '3e5'),
    exact: true
  },
  {
    path: '/voting/blog/archive',
    component: ComponentCreator('/voting/blog/archive', '15a'),
    exact: true
  },
  {
    path: '/voting/blog/authors',
    component: ComponentCreator('/voting/blog/authors', '74b'),
    exact: true
  },
  {
    path: '/voting/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/voting/blog/authors/all-sebastien-lorber-articles', '2a2'),
    exact: true
  },
  {
    path: '/voting/blog/authors/ctzurcanu',
    component: ComponentCreator('/voting/blog/authors/ctzurcanu', '031'),
    exact: true
  },
  {
    path: '/voting/blog/first-blog-post',
    component: ComponentCreator('/voting/blog/first-blog-post', 'ab6'),
    exact: true
  },
  {
    path: '/voting/blog/mdx-blog-post',
    component: ComponentCreator('/voting/blog/mdx-blog-post', '0b1'),
    exact: true
  },
  {
    path: '/voting/blog/second-blog-post',
    component: ComponentCreator('/voting/blog/second-blog-post', 'df2'),
    exact: true
  },
  {
    path: '/voting/blog/tags',
    component: ComponentCreator('/voting/blog/tags', '6c5'),
    exact: true
  },
  {
    path: '/voting/blog/tags/blog',
    component: ComponentCreator('/voting/blog/tags/blog', '180'),
    exact: true
  },
  {
    path: '/voting/blog/tags/general',
    component: ComponentCreator('/voting/blog/tags/general', '55f'),
    exact: true
  },
  {
    path: '/voting/blog/tags/voting',
    component: ComponentCreator('/voting/blog/tags/voting', 'aa4'),
    exact: true
  },
  {
    path: '/voting/blog/welcome',
    component: ComponentCreator('/voting/blog/welcome', '088'),
    exact: true
  },
  {
    path: '/voting/markdown-page',
    component: ComponentCreator('/voting/markdown-page', '981'),
    exact: true
  },
  {
    path: '/voting/docs',
    component: ComponentCreator('/voting/docs', 'eb0'),
    routes: [
      {
        path: '/voting/docs',
        component: ComponentCreator('/voting/docs', '35e'),
        routes: [
          {
            path: '/voting/docs',
            component: ComponentCreator('/voting/docs', 'd61'),
            routes: [
              {
                path: '/voting/docs/blueprint-docs/voting-legitimacy',
                component: ComponentCreator('/voting/docs/blueprint-docs/voting-legitimacy', '696'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voting/docs/category/blueprint---docs',
                component: ComponentCreator('/voting/docs/category/blueprint---docs', 'fe5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voting/docs/intro',
                component: ComponentCreator('/voting/docs/intro', 'c24'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/voting/',
    component: ComponentCreator('/voting/', '95d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
