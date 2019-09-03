import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { EventsService } from './events.service';
import { LangService } from '../lang.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EventsComponent implements OnInit {
  // init declaration
  events
  eventsLength;
  lastFourEvents = [];
  selectedItem;
  language
  modalRef: BsModalRef;
  eventId;

  constructor(private _events: EventsService, private langService: LangService, private modalService: BsModalService, private _snackBar: MatSnackBar) { }

  // methods
  openModal(template: TemplateRef<any>, id) {
    this.modalRef = this.modalService.show(template, { class: 'modal-xl benevole-modal' });
    this.eventId = id;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
      panelClass: ['blue-snackbar']
    });
  }


  // init method 
  ngOnInit() {
    this._events.getEvents().subscribe(data => {
      if ((<any>data).length > 4) {
        for (let i = 1; i < 5; i++) {
          this.lastFourEvents.push(data[(<any>data).length - i]);
        };
      }
      else {
        (<any>data).forEach(element => {
          this.lastFourEvents.push(element)
        })
        this.lastFourEvents
      }
      this.selectedItem = this.lastFourEvents[0]
      this.language = this.langService.getLanguage();
      this.changed(1);
    })
  }

  participantFormGroup = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl('', Validators.required),
  })
  validatForms() {
    if (this.participantFormGroup.controls['nom'].invalid || this.participantFormGroup.controls['prenom'].invalid || this.participantFormGroup.controls['email'].invalid || this.participantFormGroup.controls['telephone'].invalid) {

      return false
    }
    else {
      return true;
    }
  }

  onSubmit() {
    if (this.validatForms()) {
      const participant = {
        name: this.participantFormGroup.controls['nom'].value,
        lastname: this.participantFormGroup.controls['prenom'].value,
        email: this.participantFormGroup.controls['email'].value,
        tel: this.participantFormGroup.controls['telephone'].value
      }
      // this._events.addParticipant(this.eventId, participant);
      this._events.addParticipant(this.eventId, participant).subscribe(
        noError => {
          this.openSnackBar(this.participantFormGroup.controls['nom'].value + ' ' + this.participantFormGroup.controls['prenom'].value + ', merci de votre participation à ' + this.selectedItem.title[this.language] + ' votre participation est enregistée', "Merci !")
          this.modalRef.hide();
          let date = `${this.selectedItem.date.slice(0,10)} à ${this.selectedItem.date.slice(11,16)}`
          this._events.sendMail(participant, this.selectedItem.title[this.language], date).subscribe();
        },
        err => {
          if (err.error.code == 11000) {
            this.openSnackBar('vous avez déjà inscrit à cette evenement avec cet email', "Ok !")
          }
        }
      )
    }
  }

  onSelect(item): void {
    this.selectedItem = item;
  }

  changed(id) {
    var rect = document.getElementById("eventsRectangle");
    rect.style.transition = "left 1s";
    rect.style.left = +id * 10 + 30 + "px";
  }

}
