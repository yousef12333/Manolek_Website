import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('firstOption', { static: false }) firstOption!: ElementRef; // Reference to the first option
  selectedService: string = ''; // Property to bind the selected value

  constructor(private router: Router) {}

  navigate(event: any): void {
    const value = event.target.value;
    if (value) {
      this.router.navigate([`/${value}`]);
      this.resetFirstOptionText(); // Reset the option text
    }
  }

  regularNavigate(event: any): void {
    const value = event.target.getAttribute('data-value'); 

    if (value) {
      this.router.navigate([`/${value}`]);
      this.resetFirstOptionText(); // Reset the option text
    } else {
      this.router.navigate(['']);
      this.resetFirstOptionText(); // Reset the option text
    }
  }

  // Function to reset the first option text using innerHTML
  resetFirstOptionText(): void {
    // Use setTimeout to ensure the change detection works properly
    setTimeout(() => {
      this.firstOption.nativeElement.innerHTML = 'Diensten&nbsp;&nbsp;&nbsp;▾'; // Reset the text
      this.selectedService = ''; // Reset the selected service
    });
  }
}