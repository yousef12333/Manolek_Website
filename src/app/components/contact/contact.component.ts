import { Component } from '@angular/core';
import { PageBannerComponent } from "../page-banner/page-banner.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PageBannerComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
