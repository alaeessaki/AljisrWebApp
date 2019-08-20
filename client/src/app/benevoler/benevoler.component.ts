import { Component,OnInit, TemplateRef, ViewEncapsulation, SimpleChanges  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-benevoler',
  templateUrl: './benevoler.component.html',
  styleUrls: ['./benevoler.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BenevolerComponent implements OnInit {

  // setting data
  help = {
    "en":"help",
    "fr":"Aidez nous"
  }
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private _langService: LangService) {
  }
  language = this._langService.getLanguage();
  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template, {class: 'modal-xl benevole-modal'});
 
  }

  ngOnInit(){
  }

}
