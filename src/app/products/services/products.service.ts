import { Injectable } from '@angular/core';
import { Category, Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[];

  constructor() {
    this.products = [
      {
        id: 'dsafas-121-0',
        name: 'Item Name A',
        description: 'item description',
        price: 121,
        isAvailable: true,
        category: Category.Beginner
      },
      {
        id: 'dsafas-2121-0a',
        name: 'Item Name B',
        description: 'item description',
        price: 21,
        isAvailable: true,
        category: Category.Expert
      },
      {
        id: 'dsafas-321-0d',
        name: 'Item Name C',
        description: 'item description',
        price: 19.95,
        isAvailable: false,
        category: Category.Intermediate
      },
      {
        id: 'dsafas-421-0x',
        name: 'Item Name D',
        description: 'item description',
        price: 499.95,
        isAvailable: true,
        category: Category.Beginner
      },
      {
        id: 'dsafas-521-0f',
        name: 'Item Name E',
        description: 'item description',
        price: 37.15,
        isAvailable: false,
        category: Category.Beginner
      },
      {
        id: 'ACdsafas-321-0d',
        name: 'Item Name AAAC',
        description: 'item description',
        price: 19.95,
        isAvailable: true,
        category: Category.Intermediate
      },
      {
        id: 'ABdsafas-421-0x',
        name: 'Item Name AAAD',
        description: 'item description',
        price: 499.95,
        isAvailable: true,
        category: Category.Intermediate
      },
      {
        id: 'BFDdsafas-521-0f',
        name: 'Item Name AAAE',
        description: 'item description',
        price: 37.15,
        isAvailable: true,
        category: Category.Expert
      },
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }

}
