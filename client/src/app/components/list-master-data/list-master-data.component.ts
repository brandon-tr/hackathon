import { Component, OnInit } from "@angular/core";
import { RecordsService } from "./../../records.service";

@Component({
  selector: "app-list-master-data",
  templateUrl: "./list-master-data.component.html",
  styleUrls: ["./list-master-data.component.css"]
})
export class ListMasterDataComponent implements OnInit {
  constructor(private recordsService: RecordsService) {}
  masterDataRecords;
  ngOnInit() {
    this.recordsService.masterDataObserv.subscribe(
      record => (this.masterDataRecords = record)
    );
    this.recordsService.GetMasterData();
  }
  Delete(id) {
    this.recordsService.DeleteProduct(id);
  }
}
