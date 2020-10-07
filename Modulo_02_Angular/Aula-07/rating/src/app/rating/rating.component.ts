import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent {
  @Input() rating: number;
  @Output() ratingChange = new EventEmitter<number>();

  onClick(rating: number) {
    this.ratingChange.emit(rating);
  }
}
