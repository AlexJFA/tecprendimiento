import { Component } from '@angular/core';

// Import Slick carousel module
import { SlickCarouselModule } from 'ngx-slick-carousel';

/**
 * Component for displaying services.
 */
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  // First carousel -------------------------------

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

  // Second carousel -------------------------------

  /**
   * Array of slides for the second carousel.
   */
  public slides2 = [
    { img: '../../../assets/images/Logos/logo3.png' },
    { img: '../../../assets/images/Logos/HIAS.png' },
    { img: '../../../assets/images/Logos/denaro.png' },
    { img: '../../../assets/images/Logos/tanira.png' },
    { img: '../../../assets/images/Logos/frank-Adam.png' },
    { img: '../../../assets/images/Logos/logo aszero .png' },
  ];

  // Slick carousel configuration

  /**
   * Configuration options for the second carousel.
   */
  public slideConfig2 = {
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
