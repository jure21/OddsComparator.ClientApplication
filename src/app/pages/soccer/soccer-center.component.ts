import { Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import { RegionListComponent, RegionDetailsComponent } from './components';
 
@Component({
    moduleId: module.id,
    selector: 'soccer-center',
    template: `<router-outlet></router-outlet>`
})
@RouteConfig([
    {
        name: 'RegionList',
        component: RegionListComponent,
        path: '/region',
        useAsDefault: true
    },
    {
        name : 'RegionDetail',
        component: RegionDetailsComponent,
        path: 'region/:id',
    }
])
export class SoccerCenterComponent {
    constructor() { }


}