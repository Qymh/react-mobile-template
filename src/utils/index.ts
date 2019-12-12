import Loadable from 'react-loadable';
import Loading from '@/views/Loading';

import { Routes } from '@/router';

export type GeneratedRoutes = {
  path: string;
  component: any;
}[];

export function generateRoutes(routes: Routes) {
  return routes.reduce<GeneratedRoutes>((acc, val) => {
    const component = Loadable({
      loader: val.component,
      loading: Loading
    });
    acc.push({ path: val.path, component });
    return acc;
  }, []);
}
