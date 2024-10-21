import { Component } from '@angular/core';
import { PageBannerComponent } from "../page-banner/page-banner.component";
import { SquareComponent } from "../square/square.component";
import { FooterComponent } from "../footer/footer.component";
import { ParallaxContactComponent } from "../parallax-contact/parallax-contact.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, PageBannerComponent, SquareComponent, FooterComponent, ParallaxContactComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
