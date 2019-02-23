import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charity-fund',
  templateUrl: './charity-fund.component.html',
  styleUrls: ['./charity-fund.component.scss']
})
export class CharityFundComponent implements OnInit {

  public progress = 75;
  constructor() { }

  ngOnInit() {
  }

}
