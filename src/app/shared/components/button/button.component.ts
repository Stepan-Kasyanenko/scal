import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {'class': 'app-button'}
})
export class ButtonComponent implements OnInit {
  @Input() size: string;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

}
