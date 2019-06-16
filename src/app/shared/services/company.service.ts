import { Injectable } from '@angular/core';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpService: HttpService) { }

  getAllCOmpanies() {
    return this.httpService.get('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek7/MapServer/791/query?where=1%3D1&outFields=*&outSR=4326&f=json');
  }
}
