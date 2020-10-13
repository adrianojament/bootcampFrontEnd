import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactUpdateComponent } from './contact-update/contact-update.component';

export interface Contact {
  id: number;
  name: string;
  phone: string;
}

const URL_BASE = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private http: HttpClient) {}

  listContact() {
    return this.http.get<Contact[]>(`${URL_BASE}/contacts?_sort=name`);
  }

  retriveContact(id: number) {
    return this.http.get<Contact>(`${URL_BASE}/contacts/${id}`);
  }

  createContact(contact: Contact) {
    return this.http.post<Contact>(`${URL_BASE}/contacts`, contact);
  }

  updateContact(contact: Contact) {
    return this.http.put<Contact>(
      `${URL_BASE}/contacts/${contact.id}`,
      contact
    );
  }

  deleteContact(id: number) {
    return this.http.delete<Contact>(`${URL_BASE}/contacts/${id}`);
  }
}
