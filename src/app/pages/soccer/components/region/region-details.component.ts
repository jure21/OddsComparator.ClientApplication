import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from './region.directives';


@Component({
    moduleId: module.id,
    selector: 'region-details',
    template: require('./region-details.component.html'),
    directives: [HighlightDirective]
})
export class RegionDetailsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    goBack(){
        window.history.back();
    }

}