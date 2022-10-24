import { Component, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { dashBoardData } from './dashboard-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';

  @Output() cardData = dashBoardData;

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {}
}
