import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-owl-carousel',
  standalone: true,
  imports: [CarouselModule, CommonModule ],
  templateUrl: './owl-carousel.component.html',
  styleUrl: './owl-carousel.component.css'
})
export class OwlCarouselComponent {
  customOptions: OwlOptions = {
    loop: false,
    rewind: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<span class="custom-nav-btn left-btn">‹</span>', '<span class="custom-nav-btn right-btn">›</span>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
    },
    nav: true
  };

  slides = [
    { id: 1, img: 'Badkuip.jpg' },
    { id: 2, img: 'Beveiliging.jpg' },
    { id: 3, img: 'CentraleVerwarming.jpg' }
  ];
}