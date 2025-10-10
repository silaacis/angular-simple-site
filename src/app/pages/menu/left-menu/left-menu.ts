import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './left-menu.html',
  styleUrl: './left-menu.css'
})
export class LeftMenu {
  isHomePage():boolean
  {
    return location.pathname == "/";
  }
}
