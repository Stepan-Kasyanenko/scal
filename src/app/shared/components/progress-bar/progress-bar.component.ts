import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  host: {'class': 'app-progress-bar'}
})
export class ProgressBarComponent implements OnInit {

  @Input() value: number;
  @Input() color: string;
  @Input() size: string;

  constructor() { }

  ngOnInit() {
  }

}
