import { Routes } from "@angular/router";
import { ProductSalesDataComponent } from "./components/product-sales-data/product-sales-data.component";
import { ListMasterDataComponent } from "./components/list-master-data/list-master-data.component";
import { CreateProductComponent } from "./components/product-sales-data/create-product/create-product.component";

export const appRoutes: Routes = [
  { path: "SalesData/:id", component: ProductSalesDataComponent },
  { path: "MasterData", component: ListMasterDataComponent },
  { path: "Create-Product", component: CreateProductComponent }
];
