import { Component, Input, OnInit } from '@angular/core';
import {Exercise} from '../interfaces/exercise';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  @Input() exercises: Exercise[];

  exercise: Exercise={
    name:'',
    duration: 30,
    repetitions: 3,
    preparations: 15,        
    rest: 30
  };

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.exercises = [...this.exercises, this.exercise];
    this.exercise = {...this.exercise, name:''}
  }

  remove(index: number){
    this.exercises.splice(index, 1);
  }
}
