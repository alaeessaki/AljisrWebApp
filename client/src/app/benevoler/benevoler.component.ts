import { Component, OnInit, TemplateRef, ViewEncapsulation, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LangService } from '../lang.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { BenevolerService } from './benevoler.service'
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-benevoler',
  templateUrl: './benevoler.component.html',
  styleUrls: ['./benevoler.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BenevolerComponent implements OnInit {
  // setting data

  @Input() text;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private _langService: LangService, private _benevolerService: BenevolerService, private _snackBar: MatSnackBar) {
  }

  language = this._langService.getLanguage();
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-xl benevole-modal' });
  }

  ngOnInit() {
  }


  benevoleform = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
    nom_etablissement: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl('', Validators.required),
    nom_association: new FormControl('', Validators.required),
    exp_assoc: new FormControl('', Validators.required),
    check: new FormControl('', Validators.required),
  })

  getEmailErrorMessage() {
    return this.benevoleform.controls['email'].hasError('required') ? 'You must enter a value' :
      this.benevoleform.controls['email'].hasError('email') ? 'Not a valid email' : ''
  }

  getNomEmptyError() {
    return this.benevoleform.controls['nom'].hasError('required') ? 'You must enter a value' : ''
  }
  getprenomEmptyError() {
    return this.benevoleform.controls['prenom'].hasError('required') ? 'You must enter a value' : ''
  }
  getadresseEmptyError() {
    return this.benevoleform.controls['adresse'].hasError('required') ? 'You must enter a value' : ''
  }
  getnom_etablissementEmptyError() {
    return this.benevoleform.controls['nom_etablissement'].hasError('required') ? 'You must enter a value' : ''
  }
  gettelephoneEmptyError() {
    return this.benevoleform.controls['telephone'].hasError('required') ? 'You must enter a value' : ''
  }
  getnom_associationEmptyError() {
    return this.benevoleform.controls['nom_association'].hasError('required') ? 'You must enter a value' : ''
  }
  getexp_assocEmptyError() {
    return this.benevoleform.controls['exp_assoc'].hasError('required') ? 'You must enter a value' : ''
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
      panelClass: ['blue-snackbar']
    });
  }

  onSubmit() {
    const newBenevoler = {
      nom: this.benevoleform.controls['nom'].value,
      prenom: this.benevoleform.controls['prenom'].value,
      adresse: this.benevoleform.controls['adresse'].value,
      email: this.benevoleform.controls['email'].value,
      nom_etablissement: this.benevoleform.controls['nom_etablissement'].value,
      telephone: this.benevoleform.controls['telephone'].value,
      nom_association: this.benevoleform.controls['nom_association'].value,
      exp_domaine_association: this.benevoleform.controls['exp_assoc'].value
    };

    if (!this.benevoleform.controls['exp_assoc'].invalid && !this.benevoleform.controls['nom_association'].invalid && !this.benevoleform.controls['telephone'].invalid && !this.benevoleform.controls['nom_etablissement'].invalid && !this.benevoleform.controls['adresse'].invalid && !this.benevoleform.controls['prenom'].invalid && !this.benevoleform.controls['nom'].invalid) {
      this._benevolerService.sendBenevoler(newBenevoler).subscribe(
        noError => {
          this.openSnackBar("thank You for your joining our party " + this.benevoleform.controls['nom'].value + ' ' + this.benevoleform.controls['prenom'].value, "Ok !")
          this.modalRef.hide();
        },
        err => {
          if (err.error.code == 11000) {
            this.openSnackBar("you are already benevoled " + this.benevoleform.controls['nom'].value + ' ' + this.benevoleform.controls['prenom'].value, "Ok !")
            this.modalRef.hide();
          }
          console.log(err)
        })
    }
    console.log(newBenevoler);
  }
}

