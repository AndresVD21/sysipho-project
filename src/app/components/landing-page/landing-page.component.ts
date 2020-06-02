import { Component, OnInit } from '@angular/core';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faSkullCrossbones, faMask } from '@fortawesome/free-solid-svg-icons';
import { Item } from './models/item';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  faBookmark = faBookmark;
  faSkull = faSkullCrossbones;
  faMask = faMask;

  items: Item[] = [
    { title: 'Boku no Hero', text: 'Las personas no nacen igual. El protagonista de esta historia es uno de esos casos raros que nacen sin superpoderes, pero esto no le impedirá perseguir su sueño: ser un gran héroe como el legendario All-Might. Para convertirse en el héroe que quiere ser, se apuntará a una de las academias de héroes más prestigiosas del país: Yueiko. Con la ayuda de su ídolo, All-Might, ¿podrá convertirse en un verdadero héroe?', icon: this.faMask, img: `url('../../assets/img/bnhitem.jpg')` },
    { title: 'One Piece', text: 'Una historia épica de piratas, donde narra la historia de "Monkey D. Luffy" quien cuado tenia 7 años, comió accidentalmente una "Akuma no mi"(Futa del diablo) la cual le dio poderes de goma. Por otra parte "Gol D. Roger" conocido como "El rey de los Piratas" quien fuera ejecutado por la Marine, habló antes de morir, acerca de su famoso tesoro "One Piece" escondido en la "Gran line". ',
    icon: this.faSkull, img: `url('../../assets/img/onepieceitem.jpg')` }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
