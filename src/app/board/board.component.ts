import { UnitService } from '../unit.service';
import { BoardState } from '../board-state.enum';
import { Cell } from '../cell';
import { Unit } from '../unit';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
    board: Cell[][];
    boardHeight = 9;
    boardWidgth = 9;
    currentState: BoardState;
    BoardState = BoardState;
    boardStateOptions: string[];
    selectedUnit: Unit;
    selectedCell: Cell;

    constructor(private service: UnitService) { }

    ngOnInit() {
        this.boardStateOptions = Object.keys(BoardState);
        this.boardStateOptions = this.boardStateOptions.slice(this.boardStateOptions.length / 2);

        this.board = new Array(this.boardHeight);
        for (let i = 0; i < this.board.length; i++) {
            this.board[i] = new Array(this.boardWidgth);
            for (let j = 0; j < this.board[i].length; j++) {
                this.board[i][j] = { active: true };
            }
        }
        this.service.selectedUnit.subscribe(x => this.selectedUnit = x);
        this.currentState = BoardState.Units;
    }

    cellClicked(cell: Cell) {
        if (this.currentState === BoardState.AvailableCells) {
            cell.active = !cell.active;
        }
        if (this.currentState === BoardState.Units) {
            if (!cell.active) { return; }
            if (!cell.unit) { // no unit
                if (!this.selectedUnit) { // no selected unit => spawn unit
                    cell.unit = {
                        attack: 1,
                        health: 1,
                        name: 'Unit',
                        speed: 1
                    }
                    this.selectedCell = cell;
                    this.service.selectUnit(cell.unit);
                } else { // selected unit => move
                    this.selectedCell.unit = null;
                    this.selectedCell = cell;
                    cell.unit = this.selectedUnit;
                }
            } else { // there's unit in the cell
                if (cell.unit === this.selectedUnit) {
                    this.selectedCell = null;
                    this.service.selectUnit(null);
                } else if (this.selectedUnit) { // selected unit => attack
                    cell.unit.health -= this.selectedUnit.attack;
                } else {
                    this.selectedCell = cell;
                    this.service.selectUnit(cell.unit);
                }
            }
        }
    }

    changeState(stateName: string) {
        this.currentState = BoardState[stateName];
    }
}
