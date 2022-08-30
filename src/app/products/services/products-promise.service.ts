import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsPromiseService {
  private readonly baseUrl = 'http://localhost:3000/products';

  constructor(private readonly http: HttpClient) { }

  public getProducts(): Promise<Product[]> {
    return firstValueFrom(this.http.get(`${this.baseUrl}`))
      .then(response => response as Product[])
      .catch(error => {
        console.log('An error occurred', error);
        return Promise.reject(error.message || error);
      });
  }

  public getProductById(id: NonNullable<Product['id']> | string): Promise<Product> {
    return firstValueFrom(this.http.get(`${this.baseUrl}/${id}`))
      .then(response => response as Product)
      .catch(error => {
        console.log('An error occurred', error);
        return Promise.reject(error.message || error);
      });
  }

  public addProduct(product: Product): Promise<Product> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return firstValueFrom(this.http.post(`${this.baseUrl}`, product, options))
      .then(response => response as Product)
      .catch(error => {
        console.log('An error occurred', error);
        return Promise.reject(error.message || error);
      });
  }

  public updateProduct(product: Product): Promise<Product> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return firstValueFrom(this.http.put(`${this.baseUrl}/${product.id}`, product, options))
      .then(response => response as Product)
      .catch(error => {
        console.log('An error occurred', error);
        return Promise.reject(error.message || error);
      });
  }

  public deleteProductById(id: NonNullable<Product['id']> | string): Promise<Product> {
    return firstValueFrom(this.http.delete(`${this.baseUrl}/${id}`))
      .then(response => response as Product)
      .catch(error => {
        console.log('An error occurred', error);
        return Promise.reject(error.message || error);
      });
  }

  public getNewID(): string {
    return uuidv4();
  }
}
