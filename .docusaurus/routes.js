import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/voting/fr/blog',
    component: ComponentCreator('/voting/fr/blog', '821'),
    exact: true
  },
  {
    path: '/voting/fr/blog/archive',
    component: ComponentCreator('/voting/fr/blog/archive', 'fb8'),
    exact: true
  },
  {
    path: '/voting/fr/blog/authors',
    component: ComponentCreator('/voting/fr/blog/authors', '415'),
    exact: true
  },
  {
    path: '/voting/fr/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/voting/fr/blog/authors/all-sebastien-lorber-articles', '2eb'),
    exact: true
  },
  {
    path: '/voting/fr/blog/authors/ctzurcanu',
    component: ComponentCreator('/voting/fr/blog/authors/ctzurcanu', '3b8'),
    exact: true
  },
  {
    path: '/voting/fr/blog/first-blog-post',
    component: ComponentCreator('/voting/fr/blog/first-blog-post', 'f62'),
    exact: true
  },
  {
    path: '/voting/fr/blog/mdx-blog-post',
    component: ComponentCreator('/voting/fr/blog/mdx-blog-post', 'aa4'),
    exact: true
  },
  {
    path: '/voting/fr/blog/second-blog-post',
    component: ComponentCreator('/voting/fr/blog/second-blog-post', '0e9'),
    exact: true
  },
  {
    path: '/voting/fr/blog/tags',
    component: ComponentCreator('/voting/fr/blog/tags', '02b'),
    exact: true
  },
  {
    path: '/voting/fr/blog/tags/blog',
    component: ComponentCreator('/voting/fr/blog/tags/blog', 'c5b'),
    exact: true
  },
  {
    path: '/voting/fr/blog/tags/general',
    component: ComponentCreator('/voting/fr/blog/tags/general', 'a11'),
    exact: true
  },
  {
    path: '/voting/fr/blog/tags/voting',
    component: ComponentCreator('/voting/fr/blog/tags/voting', '3b4'),
    exact: true
  },
  {
    path: '/voting/fr/blog/welcome',
    component: ComponentCreator('/voting/fr/blog/welcome', 'a7a'),
    exact: true
  },
  {
    path: '/voting/fr/markdown-page',
    component: ComponentCreator('/voting/fr/markdown-page', '773'),
    exact: true
  },
  {
    path: '/voting/fr/docs',
    component: ComponentCreator('/voting/fr/docs', 'fb9'),
    routes: [
      {
        path: '/voting/fr/docs',
        component: ComponentCreator('/voting/fr/docs', '398'),
        routes: [
          {
            path: '/voting/fr/docs',
            component: ComponentCreator('/voting/fr/docs', '34e'),
            routes: [
              {
                path: '/voting/fr/docs/blueprint-docs/voting-legitimacy',
                component: ComponentCreator('/voting/fr/docs/blueprint-docs/voting-legitimacy', 'c2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voting/fr/docs/category/blueprint---docs',
                component: ComponentCreator('/voting/fr/docs/category/blueprint---docs', '4f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voting/fr/docs/intro',
                component: ComponentCreator('/voting/fr/docs/intro', 'f2c'),
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
    path: '/voting/fr/',
    component: ComponentCreator('/voting/fr/', '6d1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
