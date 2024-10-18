import { Component } from '@angular/core';
import { PageBannerComponent } from "../page-banner/page-banner.component";
import { FooterComponent } from "../footer/footer.component";
import { SquareComponent } from "../square/square.component";

@Component({
  selector: 'app-construction-renovation',
  standalone: true,
  imports: [PageBannerComponent, FooterComponent, SquareComponent],
  templateUrl: './construction-renovation.component.html',
  styleUrl: './construction-renovation.component.css'
})
export class ConstructionRenovationComponent {

}
