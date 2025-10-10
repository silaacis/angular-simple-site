import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet,RouterModule,RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css'
})
export class AdminLayout {
  isAdminHomePage():boolean
  {
    return location.pathname == '/admin';
  }

}
