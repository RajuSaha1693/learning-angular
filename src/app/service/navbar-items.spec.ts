import { TestBed } from '@angular/core/testing';

import { NavbarItems } from './navbar-items';

describe('NavbarItems', () => {
  let service: NavbarItems;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarItems);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
