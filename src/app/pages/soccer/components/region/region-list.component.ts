import { Component, OnInit } from '@angular/core';
import { RegionService } from './region-services';
import { RegionModel } from './../../../../models';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'region-list',
    template: require('./region-list.component.html'),
    directives: [],
    providers: [RegionService]
})
export class RegionListComponent implements OnInit {
    errorMessage:string;
    regions: any[];
    getData: string;

    constructor(private _service: RegionService) { }

    ngOnInit() {
       // this.getRegions();
      // this.getTime();
      console.log("Loaded");
      this.getRegions();
     }

     getRegions(){
         this._service.getRegions().subscribe( regions => this.regions = regions,
                                               error => this.errorMessage = <any>error,
                                               () => console.log(this.regions));
     }

    //  getTime(){
    //      this._service.getCurrentTime().subscribe(
    //                                             data => this.getData = JSON.stringify(data),
    //                                              error => alert(error),
    //                                              () =>console.log("Finished"));
    //  }
}