import { Component } from '@angular/core';
import { PageBannerComponent } from "../page-banner/page-banner.component";
import { SquareComponent } from "../square/square.component";
import { ParallaxContactComponent } from "../parallax-contact/parallax-contact.component";
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-electrical',
  standalone: true,
  imports: [RouterLink,PageBannerComponent, SquareComponent, ParallaxContactComponent],
  templateUrl: './electrical.component.html',
  styleUrl: './electrical.component.css'
})
export class ElectricalComponent {

}
