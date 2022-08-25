import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category, Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    {
      id: '1',
      name: 'Item Name A',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur expedita rerum officia in iste repellendus voluptatum hic eligendi amet, itaque neque, ab ipsum obcaecati enim nam dolorum saepe dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur expedita rerum officia in iste repellendus voluptatum hic eligendi amet, itaque neque, ab ipsum obcaecati enim nam dolorum saepe dolores!',
      price: 121,
      isAvailable: true,
      category: Category.Beginner,
      image: 'https://source.unsplash.com/random/800?sig=1',
      imageTmb: 'https://source.unsplash.com/random/300x400?sig=1',
    },
    {
      id: '2',
      name: 'Item Name B',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur expedita rerum officia in iste repellendus voluptatum hic eligendi amet, itaque neque, ab ipsum obcaecati enim nam dolorum saepe dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur expedita rerum officia in iste repellendus voluptatum hic eligendi amet, itaque neque, ab ipsum obcaecati enim nam dolorum saepe dolores!',
      price: 21,
      isAvailable: true,
      category: Category.Expert,
      image: 'https://source.unsplash.com/random/800?sig=2',
      imageTmb: 'https://source.unsplash.com/random/300x400?sig=2',
    },
    {
      id: '3',
      name: 'Item Name C',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur expedita rerum officia in iste repellendus voluptatum hic eligendi amet, itaque neque, ab ipsum obcaecati enim nam dolorum saepe dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur expedita rerum officia in iste repellendus voluptatum hic eligendi amet, itaque neque, ab ipsum obcaecati enim nam dolorum saepe dolores!',
      price: 19.95,
      isAvailable: false,
      category: Category.Intermediate,
      image: 'https://source.unsplash.com/random/800?sig=3',
      imageTmb: 'https://source.unsplash.com/random/300x400?sig=3',
    },
    {
      id: '4',
      name: 'Item Name D',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur expedita rerum officia in iste repellendus voluptatum hic eligendi amet, itaque neque, ab ipsum obcaecati enim nam dolorum saepe dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur expedita rerum officia in iste repellendus voluptatum hic eligendi amet, itaque neque, ab ipsum obcaecati enim nam dolorum saepe dolores!',
      price: 499.95,
      isAvailable: true,
      category: Category.Beginner,
      image: 'https://source.unsplash.com/random/800?sig=4',
      imageTmb: 'https://source.unsplash.com/random/300x400?sig=4',
    },
    {
      id: '5',
      name: 'Item Name E',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur expedita rerum officia in iste repellendus voluptatum hic eligendi amet, itaque neque, ab ipsum obcaecati enim nam dolorum saepe dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur expedita rerum officia in iste repellendus voluptatum hic eligendi amet, itaque neque, ab ipsum obcaecati enim nam dolorum saepe dolores!',
      price: 37.15,
      isAvailable: false,
      category: Category.Beginner,
      image: 'https://source.unsplash.com/random/800?sig=5',
      imageTmb: 'https://source.unsplash.com/random/300x400?sig=5',
    },
    {
      id: '6',
      name: 'Item Name AAAC',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur expedita rerum officia in iste repellendus voluptatum hic eligendi amet, itaque neque, ab ipsum obcaecati enim nam dolorum saepe dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur expedita rerum officia in iste repellendus voluptatum hic eligendi amet, itaque neque, ab ipsum obcaecati enim nam dolorum saepe dolores!',
      price: 19.95,
      isAvailable: true,
      category: Category.Intermediate,
      image: 'https://source.unsplash.com/random/800?sig=6',
      imageTmb: 'https://source.unsplash.com/random/300x400?sig=6',
    },
    {
      id: '7',
      name: 'Item Name AAAD',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur expedita rerum officia in iste repellendus voluptatum hic eligendi amet, itaque neque, ab ipsum obcaecati enim nam dolorum saepe dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur expedita rerum officia in iste repellendus voluptatum hic eligendi amet, itaque neque, ab ipsum obcaecati enim nam dolorum saepe dolores!',
      price: 499.95,
      isAvailable: true,
      category: Category.Intermediate,
      image: 'https://source.unsplash.com/random/800?sig=7',
      imageTmb: 'https://source.unsplash.com/random/300x400?sig=7',
    },
    {
      id: '8',
      name: 'Item Name AAAE',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur expedita rerum officia in iste repellendus voluptatum hic eligendi amet, itaque neque, ab ipsum obcaecati enim nam dolorum saepe dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur expedita rerum officia in iste repellendus voluptatum hic eligendi amet, itaque neque, ab ipsum obcaecati enim nam dolorum saepe dolores!',
      price: 37.15,
      isAvailable: true,
      category: Category.Expert,
      image: 'https://source.unsplash.com/random/800?sig=8',
      imageTmb: 'https://source.unsplash.com/random/300x400?sig=8',
    },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: NonNullable<Product['id']> | string): Observable<Product> {
    return of(this.products.find(product => product.id === id)!);
  }

  addProduct(product: Product): void {
    this.products = [...this.products, product];
  }

  updateProduct(product: Product): void {
    const i = this.products.findIndex(p => p.id === product.id);

    if (i > -1) {
      this.products.splice(i, 1, product);
    }
  }

  deleteProduct(product: Product): void {
    const i = this.products.findIndex(p => p.id === product.id);

    if (i > -1) {
      this.products.splice(i, 1);
    }
  }

  getNewID(): number {
    return +this.products[this.products.length - 1].id + 1;
  }

}
