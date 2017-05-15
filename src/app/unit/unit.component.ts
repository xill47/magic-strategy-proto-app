import { Unit } from '../unit';
import { Component, OnInit } from '@angular/core';
import { SelectedUnitService } from 'app/selected-unit.service';

@Component({
    selector: 'app-unit',
    templateUrl: './unit.component.html',
    styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
    unit: Unit;

    constructor(private unitService: SelectedUnitService) { }

    ngOnInit() {
        this.unitService.selectedUnit.subscribe(x => this.unit = x);
    }

}
