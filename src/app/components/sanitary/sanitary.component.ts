import { Component } from '@angular/core';
import { PageBannerComponent } from "../page-banner/page-banner.component";
import { SquareComponent } from "../square/square.component";

@Component({
  selector: 'app-sanitary',
  standalone: true,
  imports: [PageBannerComponent, SquareComponent],
  templateUrl: './sanitary.component.html',
  styleUrl: './sanitary.component.css'
})
export class SanitaryComponent {

}
