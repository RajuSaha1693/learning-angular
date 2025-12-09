import { Component, OnInit } from '@angular/core';
import { Products } from '../../service/products';
import { ProductProps } from '../../model/Product';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  products: ProductProps[] = [];
  // products$!: Observable<ProductProps[]>;
  isLoading: boolean = true;

  constructor(private productService: Products) {}
  ngOnInit(): void {
    // this.products$ = this.productService.getProducts().pipe(map((res) => res.products));
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.products = res.products;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = true;
      },
    });
  }
}
