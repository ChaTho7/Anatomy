import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComminicateService {
  static onData: any;

  constructor() {}

  innerMethod(data: any) {
    // we can do stuff with data if we want
    ComminicateService.onData = data;
  }

  static getterMethod() {
    return this.onData;
  }
}
