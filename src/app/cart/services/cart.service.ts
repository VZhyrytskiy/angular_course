import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {
        id: 'dsafas-121-0',
        name: 'Item Name A',
        description: 'item description',
        price: 121,
        amount: 5
      },
      {
        id: 'dsafas-2121-0a',
        name: 'Item Name B',
        description: 'item description',
        price: 21,
        amount: 15
      },
      {
        id: 'dsafas-321-0d',
        name: 'Item Name C',
        description: 'item description',
        price: 19.95,
        amount: 25
      },
      {
        id: 'dsafas-421-0x',
        name: 'Item Name D',
        description: 'item description',
        price: 499.95,
        amount: 45
      },
      {
        id: 'dsafas-521-0f',
        name: 'Item Name E',
        description: 'item description',
        price: 37.15,
        amount: 35
      },
    ]
  }
  
}
