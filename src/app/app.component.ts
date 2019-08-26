import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica02';
  constructor(private router: Router) { }
  navbar() {
    this.router.navigate(["navbar"]);
  }
  home(){
    this.router.navigate(["home"])
  }
  link(){
    this.router.navigate(["link"])
  }
}
