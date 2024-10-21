import { Component } from '@angular/core';
import { PageBannerComponent } from "../page-banner/page-banner.component";
import { FooterComponent } from "../footer/footer.component";
import { SquareComponent } from "../square/square.component";
import { ParallaxContactComponent } from "../parallax-contact/parallax-contact.component";
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-construction-renovation',
  standalone: true,
  imports: [RouterLink,PageBannerComponent, FooterComponent, SquareComponent, ParallaxContactComponent],
  templateUrl: './construction-renovation.component.html',
  styleUrl: './construction-renovation.component.css'
})
export class ConstructionRenovationComponent {

}
