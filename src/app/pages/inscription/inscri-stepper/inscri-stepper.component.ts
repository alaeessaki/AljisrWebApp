import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-inscri-stepper',
  templateUrl: './inscri-stepper.component.html',
  styleUrls: ['./inscri-stepper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InscriStepperComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  finalFormGroup: FormGroup;


  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.finalFormGroup = this._formBuilder.group({
      finalCtrl: ['', Validators.required]
    });
  }
}
