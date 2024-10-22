import { Component } from '@angular/core';
import { PageBannerComponent } from "../page-banner/page-banner.component";
import { SquareComponent } from "../square/square.component";
import { ParallaxContactComponent } from "../parallax-contact/parallax-contact.component";
import {RouterLink} from "@angular/router";
import { OwlCarouselComponent } from "../../owl-carousel/owl-carousel.component";
@Component({
  selector: 'app-sanitary',
  standalone: true,
  imports: [RouterLink, PageBannerComponent, SquareComponent, ParallaxContactComponent, OwlCarouselComponent],
  templateUrl: './sanitary.component.html',
  styleUrl: './sanitary.component.css'
})
export class SanitaryComponent {

}
