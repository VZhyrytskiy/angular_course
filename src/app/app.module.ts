import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { ConstantLiteralToken, constLit } from './core/services/constant.service';
import { GeneratorFactory } from './core/services/generator.factory';
import { GeneratorToken, GeneratorService } from './core/services/generator.service';
import { LocalStorageToken, storageInstance } from './core/services/local-storage.service';
import { FirstComponent } from './first/first.component';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './container/container.component';
import { MainContentComponent } from './container/main-content/main-content.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './core/interceptors';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ContainerComponent,
    MainContentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    ProductsModule,
    OrdersModule,
    CartModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  exports: [
    ContainerComponent,
    MainContentComponent,
  ],
  providers: [
    httpInterceptorProviders,
    {
      provide: ConstantLiteralToken, useValue: constLit
      // HOW TO USE: @Inject(ConstantLiteralToken) private cl: ConstantLiteral
    },
    {
      provide: GeneratorToken, useFactory: GeneratorFactory(32), deps: [GeneratorService]
      // HOW TO USE: @Inject(GeneratorToken) private rnd: string
    },
    {
      provide: LocalStorageToken, useValue: storageInstance
      // HOW TO USE: @Inject(LocalStorageToken) private ls: LocalStorageService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// Все хорошо
// Все ок
