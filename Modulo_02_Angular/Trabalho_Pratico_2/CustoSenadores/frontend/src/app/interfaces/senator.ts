import { senatorCost } from './senator-cost';

export interface Senator {
  id: number;
  nomeSenador: string;
  despesas: senatorCost[];
}
