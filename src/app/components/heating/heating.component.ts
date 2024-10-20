import { Component } from '@angular/core';
import { PageBannerComponent } from "../page-banner/page-banner.component";
import { SquareComponent } from "../square/square.component";
import { ParallaxContactComponent } from "../parallax-contact/parallax-contact.component";

@Component({
  selector: 'app-heating',
  standalone: true,
  imports: [PageBannerComponent, SquareComponent, ParallaxContactComponent],
  templateUrl: './heating.component.html',
  styleUrl: './heating.component.css'
})
export class HeatingComponent {

}
