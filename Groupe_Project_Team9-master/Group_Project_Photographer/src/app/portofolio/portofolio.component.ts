import { Component, OnInit } from '@angular/core';
import { Landscape, } from '../photos';
import { Wedding } from '../photos';
import { Food } from '../photos';
import { Ilandscape, } from '../Iphotos';
import { Iwedding } from '../Iphotos';
import { Ifood } from '../Iphotos';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css'],
})
export class PortofolioComponent implements OnInit {
  weddings: Iwedding[] = Wedding;
  wedding: any;

  foods: Ifood[] = Food;
  food: any;

  landscapes: Ilandscape[] = Landscape;
  landscape: any;

  constructor(private route: ActivatedRoute, public scroller: ViewportScroller,private router: Router) {
    console.log(window.pageYOffset);
    
  }
  gotoTop() {
    (document.getElementById('top3') as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
jump() {
  (document.getElementById('wedding') as HTMLElement).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
}

jump2() {
  
  (document.getElementById('culinary') as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
}

jump3() {
  (document.getElementById('portraits') as HTMLElement).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
}
  ngOnInit(): void {
    this.router.navigate(["/portfolio"]);
  }
}

