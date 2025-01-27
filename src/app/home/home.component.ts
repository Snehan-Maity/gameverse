import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Slider
  currentIndex: number = 0;
  slides = [
    'assets/images/slider1.jpg',
    'assets/images/slider2.jpg',
    // 'assets/images/slider3.jpg',
    // 'assets/images/slider4.jpg',
    // 'assets/images/slider5.jpg',
    // 'assets/images/slider6.jpg'
  ];
  interval: any;

  constructor() {
    this.autoSlide();
  }

  autoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  stopAutoSlide() {
    clearInterval(this.interval);
  }


  // Cards Rotate 
  // games = [
  //   { name: 'GTA V', details: 'Epic fantasy world battles.', image: 'gta5.jpg', link: '/game1' },
  //   { name: 'PUBG', details: 'Thrilling space racing action.', image: 'pubg.jpg', link: '/game2' },
  //   { name: 'FIFA 19', details: 'Explore magical adventures.', image: 'fifa.jpg', link: '/game3' },
  //   { name: 'Zombie Survival', details: 'Survive the undead apocalypse.', image: 'assets/images/game4.jpg', link: '/game4' },
  //   { name: 'Cyber Fighters', details: 'Futuristic action-packed combat.', image: 'assets/images/game5.jpg', link: '/game5' },
  //   { name: 'Puzzle Mania', details: 'Challenge your brain with puzzles.', image: 'assets/images/game6.jpg', link: '/game6' }
  // ];

  // displayedGames = [...this.games.slice(0, 3)];

  // ngOnInit(): void {
  //   this.startAutoRotation();
  // }

  // startAutoRotation() {
  //   setInterval(() => {
  //     this.rotateGames();
  //   }, 3000);
  // }

  // rotateGames() {
  //   const firstGame = this.displayedGames.shift(); // Remove the first element
  //   if (firstGame) {
  //     this.displayedGames.push(firstGame); // Add it to the end
  //   }
  // }

  // getCardClass(index: number) {
  //   if (index === 0) return 'left-card';
  //   if (index === 1) return 'center-card';
  //   if (index === 2) return 'right-card';
  //   return '';
  // }

  // goToGamePage(link: string) {
  //   window.location.href = link;
  // }

}

