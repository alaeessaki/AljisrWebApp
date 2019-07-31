import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../contacts.service';


@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.scss']
})
export class ContactlistComponent implements OnInit {
  contacts;

  constructor(private _ContactsService: ContactsService) { }

  ngOnInit() {
    this._ContactsService.getContacts().subscribe(data=>{
      this.contacts = data;
      console.log(this.contacts);
    });
  }

}
