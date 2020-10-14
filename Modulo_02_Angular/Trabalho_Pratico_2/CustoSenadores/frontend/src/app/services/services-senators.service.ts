import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Senator } from '../interfaces/senator';

const URL_BASE = 'http://localhost:3000';

const expenseTypes = [
  { id: 1, expense: 'Aluguel de imóveis e despesas concernentes a eles.' },
  { id: 2, expense: 'Divulgação da atividade parlamentar.' },
  {
    id: 3,
    expense: 'Aquisição de material de consumo para uso no escritório.',
  },
  { id: 4, expense: 'Passagens aéreas, aquáticas e terrestres nacionais.' },
  {
    id: 5,
    expense:
      'Contratação de consultorias, assessorias, pesquisas, trabalhos técnicos e outros serviços.',
  },
  { id: 6, expense: 'Locomoção, hospedagem, alimentação e combustíveis.' },
  { id: 7, expense: 'Serviços de Segurança Privada.' },
];

@Injectable({
  providedIn: 'root',
})
export class ServicesSenatorsService {
  IdInitialExpensive = 1;
  IdFinalExpensive = 7;
  constructor(private httpClient: HttpClient) {}

  getAllSenators() {
    return this.httpClient.get<Senator[]>(
      `${URL_BASE}/senadores/?_sort=nomeSenador`
    );
  }

  getSenator(id: number) {
    return this.httpClient.get<Senator>(`${URL_BASE}/despesasSenadores/${id}`);
  }

  getExpensive(id: number) {
    let expensiveType = expenseTypes.find((type) => type.id === id);
    return expensiveType ? expensiveType.expense : 'Não encontrado';
  }
}
