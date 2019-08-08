import { Component,OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-benevoler',
  templateUrl: './benevoler.component.html',
  styleUrls: ['./benevoler.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BenevolerComponent implements OnInit {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template, {class: 'modal-xl benevole-modal'});
 
  }

  ngOnInit() {
  }

}
