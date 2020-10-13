import { Component, OnInit } from '@angular/core';
import { Contact, ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(private serviceContact: ContactsService) {}

  ngOnInit(): void {
    this.serviceContact
      .listContact()
      .subscribe((contacts) => (this.contacts = contacts));
  }

  remove(contact: Contact) {
    this.serviceContact.deleteContact(contact.id).subscribe(() => {
      this.contacts = this.contacts.filter((c) => c.id !== contact.id);
    });
  }
}
