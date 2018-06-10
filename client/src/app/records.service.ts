import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class RecordsService {
  constructor(private _http: Http) {}
  private masterData = new BehaviorSubject("");
  private productData = new BehaviorSubject("");
  masterDataObserv = this.masterData.asObservable();
  productDataObserv = this.productData.asObservable();

  GetMasterData() {
    this._http.get("/GetAllMasterData").subscribe(
      data => {
        this.masterData.next(data.json());
      },
      err => {
        console.log(err);
        if (err._body === '"MasterData currently has no records"') {
          return this.masterData.next(err._body);
        }
        this.handleError(err, this.masterData);
      }
    );
  }

  GetProduct(id) {
    console.log(id);
    this._http.get(`/FindProduct/${id}`).subscribe(
      data => {
        console.log(data);
        this.productData.next(data.json());
      },
      err => {
        console.log(err);
        if (err._body === '"MasterData currently has no records"') {
          return this.productData.next(err._body);
        }
        this.handleError(err, this.productData);
      }
    );
  }

  AddProduct(product) {
    this._http.post(`/AddMasterDataRecord/`, product).subscribe(
      data => {
        console.log(data);
        this.productData.next(data.json());
      },
      err => {
        console.log(err);
        if (err._body === '"MasterData currently has no records"') {
          return this.productData.next(err._body);
        }
        this.handleError(err, this.productData);
      }
    );
  }

  DeleteProduct(id) {
    console.log(id);
    this._http.delete(`/DeleteMasterDataRecord/${id}`).subscribe(
      data => {
        console.log(data);
        this.productData.next(data.json());
      },
      err => {
        console.log(err);
        if (err._body === '"MasterData currently has no records"') {
          return this.productData.next(err._body);
        }
        this.handleError(err, this.productData);
      }
    );
  }

  private handleError(error: any, type: any) {
    let errMsg = error.message
      ? error.message
      : error.status
        ? `${error.status} - ${error.statusText}`
        : "Server error";
    return type.next(errMsg);
  }
}
