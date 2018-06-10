import { Component, OnInit } from "@angular/core";
import { RecordsService } from "../../records.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-sales-data",
  templateUrl: "./product-sales-data.component.html",
  styleUrls: ["./product-sales-data.component.css"]
})
export class ProductSalesDataComponent implements OnInit {
  constructor(
    private recordsService: RecordsService,
    private route: ActivatedRoute
  ) {}
  productData;
  ngOnInit() {
    this.recordsService.productDataObserv.subscribe(
      record => (this.productData = record)
    );
    this.route.params.subscribe(params => {
      let id = params["id"];
      this.recordsService.GetProduct(id);
    });
  }
}
