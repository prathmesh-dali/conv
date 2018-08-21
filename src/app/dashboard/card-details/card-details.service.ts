import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { BehaviorSubject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class CardDetailsService {

  constructor() { }

  public message = new BehaviorSubject<any>(0);
  setMessage(value: number) {
    this.message.next(value);
  }
}
