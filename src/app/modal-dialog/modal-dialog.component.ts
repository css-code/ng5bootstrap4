import { Component, ViewEncapsulation } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-dialog',
  templateUrl: './modal-dialog.component.html',
   encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent {
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  openBackDropCustomClass(content) {
    // this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    this.modalService.open(content, { });
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}