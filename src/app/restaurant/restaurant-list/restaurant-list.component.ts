
import { Component, OnInit } from '@angular/core';
import { dummyRestaurants } from '../restaurant';


@Component({
 selector: 'fapp-restaurant-list',
 templateUrl: './restaurant-list.component.html',
 styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

 public restaurants: any[] = [];

 constructor() { }
 ngOnInit(): void {
   this.restaurants = dummyRestaurants;
 }

}
