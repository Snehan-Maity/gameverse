import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  searchQuery: string = '';

  performSearch(): void {
    if (this.searchQuery.trim()) {
      console.log('Searching for:', this.searchQuery);
      // You can add API call or routing logic here
      alert(`Searching for: ${this.searchQuery}`);
    } else {
      alert('Please enter a search query');
    }
  }
}

