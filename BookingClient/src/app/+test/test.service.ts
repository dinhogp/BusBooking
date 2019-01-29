import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Response} from '@angular/http'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TestService {
  
  constructor(public http:Http) { }
  //
  getList(id){
    console.log(id);
    const webapibaseurl="Http://localhost:4000/api/bookees/";
    return this.http.get(`${webapibaseurl}${id}`)
      .map(res => res.json())

  }

  addBus(model:any){
    const webapibaseurl="Http://localhost:4000/api/buses/";
    const url = `${webapibaseurl}`;
    return this.http
        .post(url, model)
        .map((response: Response) => response)
        .catch((error: any) => {
            const body = error.error;
            const errMsg = (body.Message) ? body.Message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            return Observable.throw(errMsg);
        });
  }



}
