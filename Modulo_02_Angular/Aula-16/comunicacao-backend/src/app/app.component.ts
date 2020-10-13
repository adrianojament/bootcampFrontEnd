import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const urlBase = 'http://localhost:3000';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'comunicacao-backend';
  produtos: Produto[] = [];
  form = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    preco: new FormControl(0, [Validators.required, Validators.min(0.01)]),
  });

  constructor(private httpCliente: HttpClient) {}

  ngOnInit(): void {
    this.httpCliente.get<Produto[]>(`${urlBase}/produtos`).subscribe((data) => {
      this.produtos = data;
    });
  }

  removeProduct(produto: Produto): void {
    this.httpCliente
      .delete<Produto>(`${urlBase}/produtos/${produto.id}`)
      .subscribe(() => {
        this.produtos = this.produtos.filter((prod) => prod.id !== produto.id);
      });
  }

  addProduct(): void {
    const produto = this.form.value;
    this.httpCliente
      .post<Produto>(`${urlBase}/produtos`, produto)
      .subscribe((novoProduto) => {
        this.produtos = [...this.produtos, novoProduto];
        this.form.reset();
      });
  }
}
