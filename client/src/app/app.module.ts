import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { ListMasterDataComponent } from "./components/list-master-data/list-master-data.component";
import { ProductSalesDataComponent } from "./components/product-sales-data/product-sales-data.component";
import { RecordsService } from "./records.service";
import { appRoutes } from "./Routes";
import { CreateProductComponent } from "./components/product-sales-data/create-product/create-product.component";
@NgModule({
  declarations: [
    AppComponent,
    ListMasterDataComponent,
    ProductSalesDataComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
