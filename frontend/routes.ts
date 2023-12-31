import type { Route } from '@vaadin/router';
import './views/main-layout';
import './views/todo/todo-view';

export type ViewRoute = Route & {
  title?: string;
  icon?: string;
  children?: ViewRoute[];
};

export const views: ViewRoute[] = [
  // Place routes below (more info https://hilla.dev/docs/routing)
  {
    path: '',
    component: 'todo-view',
    icon: '',
    title: '',
  },
  {
    path: 'todo',
    component: 'todo-view',
    icon: 'list-alt-solid',
    title: 'Todo',
  },
];
export const routes: ViewRoute[] = [
  {
    path: '',
    component: 'main-layout',
    children: views,
  },
];
