import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cards = [
    { image: 'assets/checkmark_icon.jpg', title: 'Card 1' },
    { image: 'assets/graphs_icon.jpg', title: 'Card 2' },
    { image: 'assets/bullseye_icon.jpg', title: 'Card 3' },
  ];

  scrollToForm() {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  submitForm() {
    const firstName = (document.getElementById('first-name') as HTMLInputElement)?.value.trim();
    const lastName = (document.getElementById('last-name') as HTMLInputElement)?.value.trim();
    const company = (document.getElementById('company') as HTMLInputElement)?.value.trim();
    const role = (document.getElementById('role') as HTMLInputElement)?.value.trim();

    if (!firstName || !lastName || !company || !role) {
      alert('Please fill in all required fields.');
      return;
    }

    alert('Form submitted successfully!');
  }

}
