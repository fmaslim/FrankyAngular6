import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { AngularRedditComponent } from './angular-reddit/angular-reddit.component';
import { AngularRedditArticleComponent } from './angular-reddit-article/angular-reddit-article.component';
import { InventoryProductRowComponent } from './inventory-product-row/inventory-product-row.component';
import { InventoryProductListComponent } from './inventory-product-list/inventory-product-list.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { PriceServiceDemoComponent } from './price-service-demo/price-service-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent,
    AngularRedditComponent,
    AngularRedditArticleComponent,
    InventoryProductRowComponent,
    InventoryProductListComponent,
    DemoFormSkuComponent,
    PriceServiceDemoComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
