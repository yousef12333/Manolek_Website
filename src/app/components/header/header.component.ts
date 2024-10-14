import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigate(event: any): void {
    const value = event.target.value;
    if (value) {
      this.router.navigate([`/${value}`]);
    }
    
  }
  regularNavigate(event: any): void {
    const value = event.target.getAttribute('data-value'); 

    if (value) {
      this.router.navigate([`/${value}`]);
    } else {
      this.router.navigate(['']);
    }
  }
}
