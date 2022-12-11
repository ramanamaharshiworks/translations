import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-top-carousel',
  templateUrl: './top-carousel.component.html',
  styleUrls: ['./top-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopCarouselComponent implements OnInit {
  imgCollection: Array<object> = [
    {
      image: 'https://ropeandsnake.files.wordpress.com/2020/07/ramana-younger-face.jpg?w=591',
      thumbImage: 'https://ropeandsnake.files.wordpress.com/2020/07/ramana-younger-face.jpg?w=591',
      alt: 'Image 1',
      title: 'Image 1'
    }, {
      image: 'https://www.dagadevelopers.com/wp-content/uploads/2020/12/ramana.jpg',
      thumbImage: 'https://www.dagadevelopers.com/wp-content/uploads/2020/12/ramana.jpg',
      title: 'Image 2',
      alt: 'Image 2'
    }, {
      image: 'https://ramanafoundation.github.io/works/images/arunachala.png',
      thumbImage: 'https://ramanafoundation.github.io/works/images/arunachala.png',
      title: 'Image 3',
      alt: 'Image 3'
    }
];


  constructor() { }

  ngOnInit(): void {
  }

}
