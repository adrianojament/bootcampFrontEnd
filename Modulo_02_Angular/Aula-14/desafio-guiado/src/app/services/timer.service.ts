import { Injectable } from '@angular/core';
import { Exercise } from '../interfaces/exercise';

@Injectable({ providedIn: 'root' })
export class TimeService {
  exercises: Exercise[] = [
    {
      name: 'Esteira',
      duration: 30,
      repetitions: 3,
      preparations: 15,
      rest: 20,
    },
  ];
  currentEx: number;
  currentRep: number;
  phase: number;
  timeLeft: number;

  restart(): void {
    this.currentEx = 0;
    this.currentRep = 0;
    this.phase = 0;
    this.timeLeft = this._getTimeCurrentPhase();
  }

  next(): void {
    if (this.phase < 2) {
      this.phase++;
    } else {
      const ex = this.exercises[this.currentEx];
      if (this.currentRep < ex.repetitions - 1) {
        this.currentRep++;
        this.phase = 1;
      } else {
        if (this.currentEx < this.exercises.length - 1) {
          this.currentEx++;
          this.currentRep = 0;
          this.phase = 0;
        } else {
          return;
        }
      }
    }

    this.timeLeft = this._getTimeCurrentPhase();
  }

  private _getTimeCurrentPhase(): number {
    const ex = this.exercises[this.currentEx];
    let time: number;
    switch (this.phase) {
      case 0:
        time = ex.preparations;
        break;
      case 1:
        time = ex.duration;
        break;
      default:
        time = ex.rest;
        break;
    }
    return time * 1000;
  }

  decrementTimeLeft(ellapsedTimeMS): void {
    if (ellapsedTimeMS >= this.timeLeft) {
      this.next();
    } else {
      this.timeLeft -= ellapsedTimeMS;
    }
  }
  add(exercise: Exercise) {
    this.exercises = [...this.exercises, exercise];
  }
  remove(index: number) {
    this.exercises.splice(index, 1);
  }
}
