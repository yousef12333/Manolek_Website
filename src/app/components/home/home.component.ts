import { Component } from '@angular/core';
import { PageBannerComponent } from "../page-banner/page-banner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
