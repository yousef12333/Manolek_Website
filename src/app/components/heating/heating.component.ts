import { Component } from '@angular/core';
import { PageBannerComponent } from "../page-banner/page-banner.component";

@Component({
  selector: 'app-heating',
  standalone: true,
  imports: [PageBannerComponent],
  templateUrl: './heating.component.html',
  styleUrl: './heating.component.css'
})
export class HeatingComponent {

}
