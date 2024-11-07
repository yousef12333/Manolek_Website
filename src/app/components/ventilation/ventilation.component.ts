import { Component } from '@angular/core';
import { PageBannerComponent } from "../page-banner/page-banner.component";
import { SquareComponent } from "../square/square.component";
import { ParallaxContactComponent } from "../parallax-contact/parallax-contact.component";
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-ventilation',
  standalone: true,
  imports: [PageBannerComponent, SquareComponent, ParallaxContactComponent, RouterLink],
  templateUrl: './ventilation.component.html',
  styleUrl: './ventilation.component.css'
})
export class VentilationComponent {

}
