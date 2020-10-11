import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css'],
})
export class RefreshComponent implements OnInit, OnDestroy {
  @Input() id: number;

  protected interval: NodeJS.Timeout;

  constructor() {}

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      console.log(`Component #${this.id} refresh`);
    }, 2000);
  }
}
