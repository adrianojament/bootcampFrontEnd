import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { resumeExpensive } from '../interfaces/resume-expensive';
import { senatorCost } from '../interfaces/senator-cost';
import { ServicesSenatorsService } from '../services/services-senators.service';

@Component({
  selector: 'app-senator-costs',
  templateUrl: './senator-costs.component.html',
  styleUrls: ['./senator-costs.component.css'],
})
export class SenatorCostsComponent implements OnInit {
  id: number;
  nameSenator: string;
  listCost: senatorCost[] = [];
  listResumeExpensive: resumeExpensive[] = [];
  displayedColumns: string[] = ['fornec', 'tipo', 'data', 'valor'];
  displayedColumnsExpensive: string[] = ['expensive', 'value'];

  constructor(
    private serviceSenator: ServicesSenatorsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id = parseInt(paramMap.get('id'));
      this.serviceSenator.getSenator(this.id).subscribe((senator) => {
        this.nameSenator = senator.nomeSenador;
        this.listCost = senator.despesas;
        this.CalculateResumeExpensive();
      });
    });
  }

  ReturnData(year: number, month: number, day: number): Date {
    return new Date(year, month, day);
  }

  CalculateResumeExpensive() {
    for (
      let index = this.serviceSenator.IdInitialExpensive;
      index <= this.serviceSenator.IdFinalExpensive;
      index++
    ) {
      let valuetotal = this.listCost
        .filter((expensive) => expensive.tipo == index)
        .reduce((value, type) => value + type.valor, 0);

      if (valuetotal === 0) {
        continue;
      }

      let resume: resumeExpensive = {
        expensive: this.serviceSenator.getExpensive(index),
        value: valuetotal,
      };
      this.listResumeExpensive = [...this.listResumeExpensive, resume];
    }
    let valuetotal = this.listResumeExpensive.reduce(
      (value, expensive) => value + expensive.value,
      0
    );
    let resume: resumeExpensive = {
      expensive: 'Total de Despesas',
      value: valuetotal,
    };
    this.listResumeExpensive = [...this.listResumeExpensive, resume];
  }
}
