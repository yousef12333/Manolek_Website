import { Component, OnInit, OnDestroy, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private autoSlideInterval: any;

  constructor() { }

  ngOnInit(): void {
    register(); 
  }

  ngAfterViewInit(): void {
    const swiper: any = document.querySelector('swiper-container');

    if (swiper && swiper.swiper) {
      this.startAutoSlide(swiper);
    }
  }

  private startAutoSlide(swiper: any): void {
    this.clearAutoSlide(); 

    this.autoSlideInterval = setInterval(() => {
      swiper.swiper.slideNext();
    }, 10000);
  }

  private clearAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  ngOnDestroy(): void {
    this.clearAutoSlide();
  }
}
