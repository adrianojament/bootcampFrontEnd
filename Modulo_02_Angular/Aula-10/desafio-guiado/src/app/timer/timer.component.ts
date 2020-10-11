import { Input, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Exercise } from '../interfaces/exercise';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input() exercises: Exercise[] = [];
  currentEx: number;
  currentRep: number;
  phase: number;
  timeLeft: number;
  interval: NodeJS.Timeout;

  ngOnDestroy(): void {
    this.pause();
  }

  ngOnInit(): void {
    this.restart();
  }

  formartPhase(phase: number): string {
    let namePhase: string = '';
    switch (phase) {
      case 0:
        namePhase = 'Preparação';
        break;
      case 1:
        namePhase = 'Exercicio';
        break;
      default:
        namePhase = 'Descanso';
        break;
    }
    return namePhase;
  }

  restart(): void {
    this.currentEx = 0;
    this.currentRep = 0;
    this.phase = 0;
    this.timeLeft = this.getTimeCurrentPhase();
    this.pause();
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

    this.timeLeft = this.getTimeCurrentPhase();
  }

  getTimeCurrentPhase(): number {
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
    return time * 10;
  }

  start(): void {
    if (!this.interval) {
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.next();
        }
      }, 100);
    }
  }

  pause(): void {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  formatTimeLeft(time: number) {
    return (time / 10).toString();
  }
}
