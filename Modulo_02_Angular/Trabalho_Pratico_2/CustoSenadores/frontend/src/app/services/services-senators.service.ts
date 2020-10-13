import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Senator } from '../interfaces/senator';

const URL_BASE = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ServicesSenatorsService {
  constructor(private httpClient: HttpClient) {}

  getAllSenators() {
    return this.httpClient.get<Senator[]>(
      `${URL_BASE}/senadores/?_sort=nomeSenador`
    );
  }
}
