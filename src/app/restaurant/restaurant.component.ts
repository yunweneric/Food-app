import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restTitle = "my restaurant";


  constructor() { }

  ngOnInit(): void {
  }

}
