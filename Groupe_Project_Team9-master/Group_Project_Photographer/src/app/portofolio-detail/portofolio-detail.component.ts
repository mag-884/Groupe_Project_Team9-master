import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iimages } from '../Iimages';
import * as imageObj from '../data.json';

@Component({
  selector: 'app-portofolio-detail',
  templateUrl: './portofolio-detail.component.html',
  styleUrls: ['./portofolio-detail.component.css']
})

export class PortofolioDetailComponent implements OnInit {
  // images_concert: Iimages = {} as Iimages;
  // images_landscape: Iimages = {} as Iimages;
  // images_art: Iimages = {} as Iimages;
  items: Iimages = {} as Iimages;
  arrImages: Iimages[]= imageObj;
  id: number = 0;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = Number(params['id']);
      // let (x of imageObj)
    })
  }

}
