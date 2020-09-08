// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'fapp-restaurant-detail',
//   templateUrl: './restaurant-detail.component.html',
//   styleUrls: ['./restaurant-detail.component.css']
// })
// export class RestaurantDetailComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/core/restaurant.service';


@Component({
  selector: 'fapp-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {
  public restaurant: any;
  constructor(private retaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getRestaurant();
    alert("I'm alive")

  }

  getRestaurant() {
    let slug = this.activatedRoute.snapshot.paramMap.get("id");
    this.restaurant = this.retaurantService.getRestaurant(slug);
  }
  ngOnDestroy(): void {
    // console.log("I'm dying");
    alert("I'm dying")

  }

}