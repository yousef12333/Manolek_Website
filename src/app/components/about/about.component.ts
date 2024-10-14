import { Component } from '@angular/core';
import { PageBannerComponent } from "../page-banner/page-banner.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PageBannerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
