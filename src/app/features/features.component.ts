import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})




export class FeaturesComponent implements OnInit {
  name = '';
  email = '';
  message = '';

  ngOnInit() {
    this.loadRatingsChart();
  }

  loadRatingsChart() {
    const ctx = document.getElementById('ratingsChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
        datasets: [{
          label: 'User Ratings',
          data: [10, 20, 30, 50, 100], // Dummy data
          backgroundColor: ['#ff4444', '#ffbb33', '#ffcc00', '#99cc00', '#33b5e5'],
        }]
      }
    });
  }

  submitForm() {
    alert(`Thank you, ${this.name}! Your message has been sent.`);
    this.name = '';
    this.email = '';
    this.message = '';
  }

  openRatingModal() {
    alert('Rating functionality will be added soon!');
  }
}

