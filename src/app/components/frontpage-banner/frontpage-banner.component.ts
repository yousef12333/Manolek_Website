import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frontpage-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontpage-banner.component.html',
  styleUrl: './frontpage-banner.component.css'
})
export class FrontpageBannerComponent {
  @Input() title!: string;
  @Input() companyName!: string;
  @Input() imageUrl!: string;
}
