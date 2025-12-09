import { Routes } from '@angular/router';
import { Welcome } from './components/welcome/welcome';
import { Profile } from './components/profile/profile';
import { Carts } from './components/carts/carts';

export const routes: Routes = [
  {
    path: '',
    component: Welcome,
  },
  {
    path: 'profile',
    component: Profile,
  },
  {
    path: 'product',
    loadComponent: async () => {
      const m = await import('../app/components/product/product');
      return m.Product;
    },
  },
  {
    path: 'cart',
    component: Carts,
  },
];
