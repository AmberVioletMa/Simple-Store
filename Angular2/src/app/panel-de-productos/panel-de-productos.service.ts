import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  private _productUrl = 'http://127.0.0.1:3000/Productos';
  constructor(private _http: HttpClient) { }

  getProducts(): Observable<any> {
    return this._http.get<Array<any>>(this._productUrl)
      .map(data => {
        return data.map(element => {
          return {
            ...element,
            CBCx: 0,
            Cantidad: 1,
          };
        });
      })
      .catch(this.handleError);
  }

  postProducts(Productos) {
    this._http.post('http://127.0.0.1:3000/Productos', ({
      ...Productos
    })).subscribe(res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
      );
    }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
