import { Component, OnInit } from "@angular/core";
import { Product } from "./productModel";
import { RecordsService } from "../../../records.service";

@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.css"]
})
export class CreateProductComponent implements OnInit {
  product = new Product();
  constructor(private recordSerive: RecordsService) {}

  ngOnInit() {}

  CreateProduct() {
    this.recordSerive.AddProduct(this.product);
  }
}
