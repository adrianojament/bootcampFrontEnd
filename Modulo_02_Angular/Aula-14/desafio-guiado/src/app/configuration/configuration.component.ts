import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimeService } from '../services/timer.service';

const defaultValue = {
  name: '',
  duration: 30,
  repetitions: 3,
  preparations: 15,
  rest: 30,
};

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css'],
})
export class ConfigurationComponent implements OnInit {
  exerciseForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    duration: new FormControl(30, [Validators.required]),
    repetitions: new FormControl(3, [Validators.required]),
    preparations: new FormControl(15, [Validators.required]),
    rest: new FormControl(30, [Validators.required]),
  });

  constructor(public ts: TimeService) {}

  ngOnInit(): void {}

  add() {
    const exercise = this.exerciseForm.value;
    this.ts.add(exercise);
    this.exerciseForm.reset({ ...exercise, name: '' });
  }

  remove(index: number) {
    this.ts.remove(index);
  }
}
