import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FurnitureService {

  constructor(private http: Http) { }

  getFurnitureData() {
    return this.http.get(`https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture`);
  }

}
