import { Component, OnInit } from '@angular/core';

const NAME_PLAYER_O: string = 'O';
const NAME_PLAYER_X: string = 'X';
const CARACTER_O: string = 'O';
const CARACTER_X: string = 'X';
const CARACTER_EMPTY: string = '';
const TOTAL_LINE = 3;
const TOTAL_COLUMN = 3;

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
})
export class TicTacToeComponent {
  currentPlayer: string = NAME_PLAYER_O;
  winner: string = CARACTER_EMPTY;
  TicTac: boolean = true;
  error: string = CARACTER_EMPTY;

  board: string[][] = [
    [CARACTER_EMPTY, CARACTER_EMPTY, CARACTER_EMPTY],
    [CARACTER_EMPTY, CARACTER_EMPTY, CARACTER_EMPTY],
    [CARACTER_EMPTY, CARACTER_EMPTY, CARACTER_EMPTY],
  ];

  constructor() {
    this.reset();
  }

  processPlay(line: number, column: number): void {
    this.error = CARACTER_EMPTY;

    if (this.winner !== CARACTER_EMPTY) {
      this.error = 'Jogo Finalizado';
      return;
    }

    if (this.board[line][column] !== CARACTER_EMPTY) {
      this.error = 'Celula preenchida';
      return;
    }

    let caracter = this.TicTac ? CARACTER_O : CARACTER_X;
    this.board[line][column] = caracter;

    if (this.checkWinner(caracter)) {
      this.winner = this.currentPlayer;
      return;
    }

    this.TicTac = !this.TicTac;
    this.currentPlayer = this.TicTac ? NAME_PLAYER_O : NAME_PLAYER_X;
  }

  checkWinner(caracter: string): boolean {
    for (let line = 0; line < TOTAL_LINE; line++) {
      if (
        this.board[line][0] === caracter &&
        this.board[line][1] === caracter &&
        this.board[line][2] === caracter
      )
        return true;
    }

    for (let column = 0; column < TOTAL_COLUMN; column++) {
      if (
        this.board[0][column] === caracter &&
        this.board[1][column] === caracter &&
        this.board[2][column] === caracter
      )
        return true;
    }
    if (
      this.board[0][0] === caracter &&
      this.board[1][1] === caracter &&
      this.board[2][2] === caracter
    )
      return true;
    if (
      this.board[0][2] === caracter &&
      this.board[1][1] === caracter &&
      this.board[2][0] === caracter
    )
      return true;

    return false;
  }

  reset(): void {
    this.board = [
      [CARACTER_EMPTY, CARACTER_EMPTY, CARACTER_EMPTY],
      [CARACTER_EMPTY, CARACTER_EMPTY, CARACTER_EMPTY],
      [CARACTER_EMPTY, CARACTER_EMPTY, CARACTER_EMPTY],
    ];
    this.currentPlayer = NAME_PLAYER_O;
    this.TicTac = true;
    this.error = CARACTER_EMPTY;
    this.winner = CARACTER_EMPTY;
  }
}
