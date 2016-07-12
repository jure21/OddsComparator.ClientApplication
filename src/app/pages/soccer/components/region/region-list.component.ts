import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { BaCard } from './../../../../theme/components'


// services
import { RegionService } from './../../../../services/sport-center.services/soccer-center.services/region-services'

// models
import { RegionModel } from './../../../../../models/'


@Component({
    moduleId: module.id,
    selector: 'region-list',
    template: require('./region-list.component.html'),
    directives:[BaCard],
    providers: [RegionService]
})
export class RegionListComponent implements OnInit, OnDestroy {
    
    // Properties
    regions: RegionModel [];
    errorMessage : string;

    private selectedRegionId: number;
    private sub: any; 

    constructor(
        private _router: Router, 
        private _regionService: RegionService
        ) { }

    ngOnInit() {
        this._regionService.getRegions().then(regions => this.regions = regions);
     }

    ngOnDestroy() { 
    
    }

}