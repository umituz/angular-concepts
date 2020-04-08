import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  themeClass = localStorage.getItem('classNameOfItem');

  constructor() {
  }

  changeTheme(theme) {
    this.themeClass = theme;
    localStorage.setItem('classNameOfItem', theme);
  }

  ngOnInit(): void {
  }

}
