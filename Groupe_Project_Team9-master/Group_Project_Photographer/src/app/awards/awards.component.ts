import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {
  gotoTop() {
    (document.getElementById('top3') as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  constructor() { }

  ngOnInit(): void {
  }

}