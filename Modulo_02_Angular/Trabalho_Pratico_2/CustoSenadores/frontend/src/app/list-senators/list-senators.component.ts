import { Component, OnInit } from '@angular/core';
import { Senator } from '../interfaces/senator';
import { ServicesSenatorsService } from '../services/services-senators.service';

@Component({
  selector: 'app-list-senators',
  templateUrl: './list-senators.component.html',
  styleUrls: ['./list-senators.component.css'],
})
export class ListSenatorsComponent implements OnInit {
  listSenators: Senator[] = [];

  constructor(private serviceSenators: ServicesSenatorsService) {}

  ngOnInit(): void {
    this.serviceSenators
      .getAllSenators()
      .subscribe((senators) => (this.listSenators = senators));
  }
}
