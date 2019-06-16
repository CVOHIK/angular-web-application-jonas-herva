import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

interface Geometry {
  x: number;
  y: number;
}

@Component({
  selector: 'app-company-info-modal',
  templateUrl: './company-info-modal.component.html',
  styleUrls: ['./company-info-modal.component.scss']
})
export class CompanyInfoModalComponent {

  @Input() geometry: Geometry;

  constructor(public activeModal: NgbActiveModal) { }

}
