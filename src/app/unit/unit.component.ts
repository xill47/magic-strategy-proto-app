import { Unit } from '../unit';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-unit',
    templateUrl: './unit.component.html',
    styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
    unit: Unit = {
        attack: 2,
        health: 3,
        maxHealth: 3,
        name: 'Test unit',
        speed: 3
    };

    constructor() { }

    ngOnInit() {
    }

}
