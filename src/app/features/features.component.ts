import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  totalRatings: number = 50;
  currentRating: number = 4.5;
  showRatingForm: boolean = false;

  openRatingForm(): void {
    this.showRatingForm = true;
  }

  closeRatingForm(): void {
    this.showRatingForm = false;
  }

  submitRating(inputRating: string): void {
    let newRating = parseFloat(inputRating);
    
    if (newRating >= 1 && newRating <= 5) {
      this.totalRatings++;
      this.currentRating = ((this.currentRating * (this.totalRatings - 1)) + newRating) / this.totalRatings;
      this.currentRating = parseFloat(this.currentRating.toFixed(1));

      alert('Thank you for your rating!');
      this.showRatingForm = false;
    } else {
      alert('Please enter a valid rating between 1 and 5.');
    }
  }
}
