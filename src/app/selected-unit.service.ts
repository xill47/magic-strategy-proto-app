import { Unit } from './unit';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SelectedUnitService {
    private unit: Subject<Unit> = new Subject();
    private destroyed: Subject<Unit> = new Subject();

    get selectedUnit(): Observable<Unit> {
        return this.unit.asObservable();
    }

    get destroyedUnit(): Observable<Unit> {
        return this.destroyed.asObservable();
    }

    selectUnit(unit: Unit) {
        this.unit.next(unit);
    }

    destroyUnit(unit: Unit) {
        this.destroyed.next(unit);
    }
}
