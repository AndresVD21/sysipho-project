import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faUserCircle = faUserCircle;

  showUserList: boolean = false;

  // FOR SMALL SCREEN
  showMenu: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleUserList() {
    this.showUserList = !this.showUserList;
  }



}
