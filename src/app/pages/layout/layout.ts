import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from '../nav/header/header';
import { LeftMenu } from '../menu/left-menu/left-menu';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterModule,Header,LeftMenu],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
