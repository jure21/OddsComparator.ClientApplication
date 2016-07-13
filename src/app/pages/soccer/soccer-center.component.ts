import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import { RegionListComponent, RegionDetailsComponent } from './components/region';


@Component({
    moduleId: module.id,
    selector: 'soccer-center',
    template: '<router-outlet></router-outlet>'
})
@RouteConfig([
    { 
        name: 'RegionList',
        path: '/region', 
        component: RegionListComponent,
        useAsDefault: true
    },
    {
        name: 'RegionDetails',
        path: '/region/:id',
        component: RegionDetailsComponent
    }
])
export class SoccerCenterComponent {
    constructor(){
    }
}