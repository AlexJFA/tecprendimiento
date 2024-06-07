import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

   /**
   * Array of slides for the first carousel.
   */
   public slides = [
    { img: '../../../assets/images/Logos/Lunika.png' },
    { img: '../../../assets/images/Logos/OdontoMigue.png' },
    { img: '../../../assets/images/Logos/Alactus.png' },
    { img: '../../../assets/images/Logos/Agathos .png' },
    { img: '../../../assets/images/Logos/ms-consulting.jpg' },
    { img: '../../../assets/images/Logos/frank-Adam.png' },
  ];

  // Slick carousel configuration

  /**
   * Configuration options for the first carousel.
   */
  public slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    slickPlay: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };


}
