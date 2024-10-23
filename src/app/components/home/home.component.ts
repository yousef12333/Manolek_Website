import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { PageBannerComponent } from '../page-banner/page-banner.component';
import { FrontpageBannerComponent } from '../frontpage-banner/frontpage-banner.component';
import { ParallaxContactComponent } from '../parallax-contact/parallax-contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, PageBannerComponent, FrontpageBannerComponent, ParallaxContactComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    register(); 
    setInterval((): any => {
      const swiper: any = document.querySelector('swiper-container');
      swiper.swiper.slideNext();
    }, 3000); 
  }
}

 
