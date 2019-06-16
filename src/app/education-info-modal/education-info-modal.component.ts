import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

interface School {
  id: string;
  district: string;
  huisnummer: string;
  naam: string;
  postcode: string;
  straat: string;
  subtype: string;
  thema: string;
  type: string;
}

@Component({
  selector: 'app-education-info-modal',
  templateUrl: './education-info-modal.component.html',
  styleUrls: ['./education-info-modal.component.scss']
})
export class EducationInfoModalComponent {

  @Input() data: School;

  constructor(public activeModal: NgbActiveModal) { }

}
