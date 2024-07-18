import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
private baseUrl = 'https://fakestoreapi.com/products';

  constructor(private http:HttpClient) { }

  getProducts(): any {
    return this.http.get<any>(this.baseUrl);
  }

  getProduct(id: any): any {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getCategories(): any {
    return this.http.get<any[]>(`${this.baseUrl}/categories`);
  }

  getProductsByCategory(category: any):any {
    return this.http.get<any>(`${this.baseUrl}/category/${category}`);
  }
}
