import { Component, OnInit } from '@angular/core';
import { CardDetailsService } from './card-details/card-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private cardDetailsService: CardDetailsService, private router: Router) { }

  pocs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  ngOnInit() {
  }

  cardClickHandler(cardNumber:number){
    this.cardDetailsService.setMessage(cardNumber);
    this.router.navigate(["./detail"]);
  }

}
