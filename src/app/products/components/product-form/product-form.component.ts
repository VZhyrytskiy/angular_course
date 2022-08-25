import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { categoriesOptions } from 'src/app/first/first.component';
import { Category, Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  public isAddNewMode = false;
  public product!: Product;
  public categories = categoriesOptions();

  @ViewChild('productForm') form!: NgForm;

  public id: string | undefined;
  public name: string | undefined;
  public description: string | undefined;
  public price: string | undefined;
  public category: Category | undefined;
  public image: string | undefined;
  public imageTmb: string | undefined;
  public isAvailable: boolean | undefined;


  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.data
      .pipe(
        map((data: Data) => {
          return data['product'];
        })
      )
      .subscribe((product: Product) => {
        if (!product) {
          this.isAddNewMode = true;
          this.product = {
            name: '',
            description: '',
            price: 0,
            category: Category.Beginner,
            image: '',
            imageTmb: '',
            isAvailable: false
          } as Product;
        } else {
          this.product = {
            ...product
          };
        }

        this.fillForm();
      });
  }


  public onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    if (this.isAddNewMode) {
      this.productsService.addProduct({
        id: this.productsService.getNewID() + '',
        name: form.value.name,
        description: form.value.description,
        price: +form.value.price,
        category: form.value.category,
        image: form.value.image,
        imageTmb: form.value.imageTmb,
        isAvailable: form.value.isAvailable
      });
    } else {
      this.productsService.updateProduct({
        id: form.value.id,
        name: form.value.name,
        description: form.value.description,
        price: +form.value.price,
        category: form.value.category,
        image: form.value.image,
        imageTmb: form.value.imageTmb,
        isAvailable: form.value.isAvailable
      })
    }

    this.form.resetForm();
    this.router.navigate(['/admin/products']);
  }

  private fillForm() {
    this.id = this.product.id;
    this.name = this.product.name;
    this.description = this.product.description;
    this.price = this.product.price + '';
    this.category = this.product.category;
    this.image = this.product.image;
    this.imageTmb = this.product.imageTmb;
    this.isAvailable = this.product.isAvailable;
  }

  canDeactivate(): boolean {
    if (!this.form.dirty) {
      return true;
    }

    return window.confirm('Discard changes?');
  }

}
