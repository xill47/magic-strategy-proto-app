import { Unit } from './unit';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SelectedUnitService {
    private unit: Subject<Unit> = new Subject();

    get selectedUnit(): Observable<Unit> {
        return this.unit.asObservable();
    }

    selectUnit(unit: Unit) {
        this.unit.next(unit);
    }
}
