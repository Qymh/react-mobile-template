import { generateRoutes } from '@/utils';

export type Routes = {
  path: string;
  component: () => any;
}[];

const routes: Routes = [
  {
    path: '/home',
    component: () => import('@/views/Home')
  },
  {
    path: '/about',
    component: () => import('@/views/About')
  }
];

const generatedRoutes = generateRoutes(routes);

export default generatedRoutes;
