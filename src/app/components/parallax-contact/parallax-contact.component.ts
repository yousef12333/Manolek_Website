import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parallax-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parallax-contact.component.html',
  styleUrl: './parallax-contact.component.css'
})
export class ParallaxContactComponent {
  @Input() imageUrl!: string;
}
