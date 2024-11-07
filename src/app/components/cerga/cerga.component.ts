import { Component } from '@angular/core';
import { ParallaxContactComponent } from "../parallax-contact/parallax-contact.component";
import { PageBannerComponent } from "../page-banner/page-banner.component";
import { SquareComponent } from "../square/square.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-cerga',
  standalone: true,
  imports: [ParallaxContactComponent, PageBannerComponent, SquareComponent, RouterLink],
  templateUrl: './cerga.component.html',
  styleUrl: './cerga.component.css'
})
export class CergaComponent {

}
