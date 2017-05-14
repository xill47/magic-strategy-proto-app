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

    constructor() { }

    ngOnInit() {
        this.board = new Array(this.boardHeight);
        for (let i = 0; i < this.board.length; i++) {
            this.board[i] = new Array(this.boardWidgth);
            for (let j = 0; j < this.board[i].length; j++) {
                this.board[i][j] = { active: true };
            }
        }
    }

    cellClicked(cell: Cell) {
        cell.active = !cell.active;
    }
}
