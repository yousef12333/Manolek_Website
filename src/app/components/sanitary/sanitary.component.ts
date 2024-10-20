import { Component } from '@angular/core';
import { PageBannerComponent } from "../page-banner/page-banner.component";
import { SquareComponent } from "../square/square.component";
import { ParallaxContactComponent } from "../parallax-contact/parallax-contact.component";

@Component({
  selector: 'app-sanitary',
  standalone: true,
  imports: [PageBannerComponent, SquareComponent, ParallaxContactComponent],
  templateUrl: './sanitary.component.html',
  styleUrl: './sanitary.component.css'
})
export class SanitaryComponent {

}
