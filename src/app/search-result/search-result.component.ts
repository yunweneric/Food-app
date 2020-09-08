import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'fapp-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    // alert("I'm dying")
    // console.log("I'm dying");


  }
  ngOnDestroy(): void {
    // console.log("I'm dying");
    alert("I'm dying")

  }

}
