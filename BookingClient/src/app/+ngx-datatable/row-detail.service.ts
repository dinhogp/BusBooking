import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Response} from '@angular/http'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RowDetailService {

  constructor(public http:Http) { }

  getBuses(){
    return this.http.get('Http://localhost:4000/api/buses')
      .map(res => res.json())
    /*  const url = `Http://localhost:4000/api/customers`;
      return this.http
          .get(url)                    
          .map((response: Response) => response)
          .catch((error: any) => {
              const body = error.error;
              const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
              return Observable.throw(errMsg);
          });*/
  }



}

