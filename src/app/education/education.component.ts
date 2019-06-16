import { Component, OnInit } from '@angular/core';
import {EducationService} from '../shared/services/education.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EducationInfoModalComponent} from '../education-info-modal/education-info-modal.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  lat: number = 51.218903;
  lng: number = 4.402193;
  schools: any;

  constructor(private educationService: EducationService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.educationService.getAllSchools().subscribe((data: any) => {
      this.schools = data.features;
    });
  }
  onMarkerClick(attributes) {
    const modalRef = this.modalService.open(EducationInfoModalComponent);
    modalRef.componentInstance.data = attributes;
  }


}
