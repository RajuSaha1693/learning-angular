import { Component } from '@angular/core';
import { NavbarItems } from '../../service/navbar-items';
import { MenuProps } from '../../model/MenuProps';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav>
      @for (menu of menuList; track menu.link){
      <a [routerLink]="menu.link">{{ menu.label }}</a>
      }
    </nav>
  `,
  styles: ``,
})
export class Navbar {
  menuList: MenuProps[];
  constructor(private navbar: NavbarItems) {
    this.menuList = navbar.getNavbarList();
  }
}
