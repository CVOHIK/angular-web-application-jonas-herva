import { Injectable } from '@angular/core';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private httpService: HttpService) { }

  getAllSchools() {
    return this.httpService.get('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek4/MapServer/256/query?where=1%3D1&outFields=*&outSR=4326&f=json');
  }

}
