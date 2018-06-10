import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  masterData = false;
  salesData = false;

  master() {
    this.masterData = true;
    if (this.salesData) {
      this.salesData = false;
    }
  }
  sales() {
    this.salesData = true;
    if (this.masterData) {
      this.masterData = false;
    }
  }
}
