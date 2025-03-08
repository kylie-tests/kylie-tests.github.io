import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'b7d'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '137'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '5c6'),
            routes: [
              {
                path: '/category/barks',
                component: ComponentCreator('/category/barks', '208'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/character-design',
                component: ComponentCreator('/category/character-design', '1d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/character-design/cd-conclusion',
                component: ComponentCreator('/character-design/cd-conclusion', 'e72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/character-design/cd-exercise',
                component: ComponentCreator('/character-design/cd-exercise', '08c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/character-design/cd-lesson',
                component: ComponentCreator('/character-design/cd-lesson', '2c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/character-design/cd-questions',
                component: ComponentCreator('/character-design/cd-questions', '6c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/character-design/character-design-intro',
                component: ComponentCreator('/character-design/character-design-intro', '0cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/tutorial-extras/manage-docs-versions', '3b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorial-extras/translate-your-site',
                component: ComponentCreator('/tutorial-extras/translate-your-site', 'cae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'fc9'),
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
    path: '*',
    component: ComponentCreator('*'),
  },
];
