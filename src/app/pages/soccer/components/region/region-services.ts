import { Injectable } from '@angular/core';
import { Http, Response } from  '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// models
import { RegionModel } from './../../../../models';


@Injectable()
export class RegionService{

    private _regionsUrl = 'api/regions.json';
    private _testUrl = ' http://date.jsontest.com';

    constructor(private _http: Http) { }

    getRegions(): Observable<any[]>{
       return this._http.get(this._regionsUrl)
                        .map(res => res.json())
                        .catch(this.handleError);
    }

    getCurrentTime(){
      return this._http.get(this._testUrl).map(res => res.json());
    }

    private extractData(res: Response){
        let body = res.json();
        return body.data || { };
    }
    private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}