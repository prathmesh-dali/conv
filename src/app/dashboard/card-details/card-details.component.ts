import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CardDetailsService } from './card-details.service';
import { POC } from './poc.model';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  poc: POC = new POC() ;
  subscription: Subscription;
  constructor(private cardDetailsService : CardDetailsService) { 
    this.subscription = this.cardDetailsService.message.subscribe(
      (message) => {
        this.poc = new POC();
        console.log(this.poc.pocNumber);

        this.poc.pocNumber = message;
        console.log(this.poc.pocNumber);

      })
  }

  ngOnInit() {
    
  }

  ngAfterContentChecked(){
    console.log(this.poc.pocNumber);
  }

  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }

}
