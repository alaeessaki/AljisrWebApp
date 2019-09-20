import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ContactMailService } from './contact-mail.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as $ from 'jquery';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent implements OnInit {

  constructor(private _contactMailService: ContactMailService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    $('img').on("load", function () {
      $(".loading-screen-wrapper").fadeOut("slow")
    }
    );
  }

  slogons = [
    "Nous plaçons la préscolarisation au coeur de l'éducation et de la protection de la petite enfance",
    "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim ullam voluptatibus quo quasi? Quasi, nesciunt. Pariatur harum sapiente laboriosam vero est corporis cumque, recusandae sequi, architecto quia totam asperiores!",
    "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim ullam voluptatibus quo quasi? Quasi, nesciunt. Pariatur harum sapiente laboriosam vero est corporis cumque, recusandae sequi, architecto quia totam asperiores!"
  ];

  senderInfo = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  })

  getEmailErrorMessage() {
    return this.senderInfo.controls['email'].hasError('required') ? 'You must enter a value' :
      this.senderInfo.controls['email'].hasError('email') ? 'Not a valid email' : ''
  }

  getNomEmptyError() {
    return this.senderInfo.controls['nom'].hasError('required') ? 'You must enter a value' : ''
  }
  getprenomEmptyError() {
    return this.senderInfo.controls['prenom'].hasError('required') ? 'You must enter a value' : ''
  }
  getMessageEmptyError() {
    return this.senderInfo.controls['message'].hasError('required') ? 'You must enter a value' : ''
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
      panelClass: ['blue-snackbar']
    });
  }

  onSubmit() {
    const newSender = {
      nom: this.senderInfo.controls['nom'].value,
      prenom: this.senderInfo.controls['prenom'].value,
      email: this.senderInfo.controls['email'].value,
      message: this.senderInfo.controls['message'].value
    };
    if (!this.senderInfo.controls['message'].invalid && !this.senderInfo.controls['prenom'].invalid && !this.senderInfo.controls['nom'].invalid && !this.senderInfo.controls['email'].invalid) {
      this._contactMailService.sendMail(newSender).subscribe(
        noError => {
          this.openSnackBar("le message a été envoyé", "Ok !")
        },
        err => {
          this.openSnackBar(" le message n'a pas été envoyé réessayer plus tard", "Ok !")
          console.log(err)
        })
    }
  }
}
