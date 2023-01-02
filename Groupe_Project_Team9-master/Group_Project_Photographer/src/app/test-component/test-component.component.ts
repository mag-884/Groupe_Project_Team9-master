import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]);
@Component({
  selector: 'app-test-swiper',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TestSwiperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
