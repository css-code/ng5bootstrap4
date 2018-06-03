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

  openDialog(content) {
    // this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    this.modalService.open(content, { size: 'sm',  centered: true  });
  }


}