import { UnitService } from '../unit.service';
import { Unit } from '../unit';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-unit',
    templateUrl: './unit.component.html',
    styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
    unit: Unit;

    constructor(private unitService: UnitService) { }

    ngOnInit() {
        this.unitService.selectedUnit.subscribe(x => this.unit = x);
    }

}
