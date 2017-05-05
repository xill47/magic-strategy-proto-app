import { Unit } from '../unit';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
    board: BoardCell[][];

    constructor() { }

    ngOnInit() {
        const boardMaxHeight = 9;
        const boardMaxWidgth = 9;

        this.board = new Array(boardMaxHeight);
        for (let i = 0; i < this.board.length; i++) {
            this.board[i] = new Array(boardMaxWidgth);
            for (let j = 0; j < this.board[i].length; j++) {
                this.board[i][j] = { active: true };
            }
        }
    }

    cellClicked(cell: BoardCell) {
        cell.active = !cell.active;
    }

}

interface BoardCell {
    active: boolean;

}
