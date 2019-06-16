import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../shared/services/company.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CompanyInfoModalComponent} from '../company-info-modal/company-info-modal.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companies: any;

  constructor(private companyService: CompanyService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.companyService.getAllCOmpanies().subscribe((data: any) => {
      this.companies = data.features;
      console.log(this.companies);
    });
  }

  onClickRow(company) {
    const modalRef = this.modalService.open(CompanyInfoModalComponent);
    modalRef.componentInstance.geometry = company.geometry;
  }

}
