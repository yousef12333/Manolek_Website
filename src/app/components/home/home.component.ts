import { Component } from '@angular/core';
import { PageBannerComponent } from "../page-banner/page-banner.component";
import { FrontpageBannerComponent } from "../frontpage-banner/frontpage-banner.component";
import { ParallaxContactComponent } from "../parallax-contact/parallax-contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageBannerComponent, FrontpageBannerComponent, ParallaxContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
