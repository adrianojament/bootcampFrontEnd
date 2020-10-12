import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { TimeService } from '../services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnDestroy {
  interval: NodeJS.Timeout;

  constructor(public ts: TimeService) {}

  ngOnDestroy(): void {
    this.pause();
  }

  ngOnInit(): void {
    this.ts.restart();
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

  start(): void {
    if (!this.interval) {
      let lastTime = Date.now();
      this.interval = setInterval(() => {
        let curretTime = Date.now();
        let ellpasedTime = curretTime - lastTime;
        lastTime = curretTime;
        this.ts.decrementTimeLeft(ellpasedTime);
      }, 100);
    }
  }

  pause(): void {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  restart(): void {
    this.ts.restart();
  }

  next(): void {
    this.ts.next();
  }
}
