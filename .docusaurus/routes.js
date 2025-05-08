import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/voting/blog',
    component: ComponentCreator('/voting/blog', 'e70'),
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
    component: ComponentCreator('/voting/blog/authors/all-sebastien-lorber-articles', '54d'),
    exact: true
  },
  {
    path: '/voting/blog/authors/yangshun',
    component: ComponentCreator('/voting/blog/authors/yangshun', 'f58'),
    exact: true
  },
  {
    path: '/voting/blog/first-blog-post',
    component: ComponentCreator('/voting/blog/first-blog-post', '9a4'),
    exact: true
  },
  {
    path: '/voting/blog/long-blog-post',
    component: ComponentCreator('/voting/blog/long-blog-post', '0f5'),
    exact: true
  },
  {
    path: '/voting/blog/mdx-blog-post',
    component: ComponentCreator('/voting/blog/mdx-blog-post', '0b1'),
    exact: true
  },
  {
    path: '/voting/blog/tags',
    component: ComponentCreator('/voting/blog/tags', '6c5'),
    exact: true
  },
  {
    path: '/voting/blog/tags/docusaurus',
    component: ComponentCreator('/voting/blog/tags/docusaurus', '0c1'),
    exact: true
  },
  {
    path: '/voting/blog/tags/facebook',
    component: ComponentCreator('/voting/blog/tags/facebook', '05f'),
    exact: true
  },
  {
    path: '/voting/blog/tags/hello',
    component: ComponentCreator('/voting/blog/tags/hello', '114'),
    exact: true
  },
  {
    path: '/voting/blog/tags/hola',
    component: ComponentCreator('/voting/blog/tags/hola', 'f8e'),
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
    component: ComponentCreator('/voting/docs', 'fe8'),
    routes: [
      {
        path: '/voting/docs',
        component: ComponentCreator('/voting/docs', 'a16'),
        routes: [
          {
            path: '/voting/docs',
            component: ComponentCreator('/voting/docs', '5b1'),
            routes: [
              {
                path: '/voting/docs/category/tutorial---basics',
                component: ComponentCreator('/voting/docs/category/tutorial---basics', 'cef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voting/docs/category/tutorial---extras',
                component: ComponentCreator('/voting/docs/category/tutorial---extras', 'd8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voting/docs/intro',
                component: ComponentCreator('/voting/docs/intro', 'c24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voting/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/voting/docs/tutorial-basics/congratulations', '9b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voting/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/voting/docs/tutorial-basics/create-a-blog-post', '3f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voting/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/voting/docs/tutorial-basics/create-a-document', '0ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voting/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/voting/docs/tutorial-basics/create-a-page', '020'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voting/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/voting/docs/tutorial-basics/deploy-your-site', '97a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voting/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/voting/docs/tutorial-basics/markdown-features', '0ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voting/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/voting/docs/tutorial-extras/manage-docs-versions', '48e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/voting/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/voting/docs/tutorial-extras/translate-your-site', '243'),
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
