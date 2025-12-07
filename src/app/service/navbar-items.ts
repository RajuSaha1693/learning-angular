import { Injectable } from '@angular/core';
import { MenuProps } from '../model/MenuProps';

@Injectable({
  providedIn: 'root',
})
export class NavbarItems {
  private navItems: MenuProps[] = [
    { link: '', label: 'Home' },
    { link: '/profile', label: 'Profile' },
    { link: '/cart', label: 'Cart' },
    { link: '/logout', label: 'Log Out' },
  ];

  getNavbarList(): MenuProps[] {
    return this.navItems;
  }
}
