import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Products {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }
}
