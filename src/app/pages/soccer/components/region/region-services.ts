import { Injectable } from '@angular/core';
import { Http, Response } from  '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

// models
import { RegionModel } from './../../../../../models';

let REGIONS = [
  new RegionModel(1,"England Premier", 3),
  new RegionModel(2,"England Premier", 5),
  new RegionModel(3,"England Premier", 6),

];

let regionsPromise = Promise.resolve(REGIONS)

@Injectable()
export class RegionService{

    private _regionsUrl = 'app/regions';

    constructor(private _http: Http) { }

    getRegions(){
        return regionsPromise;
        // return this._http.get(this._regionsUrl)
        // .map(this.extractData)
        // .catch(this.handleError);
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