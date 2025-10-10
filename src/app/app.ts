import { Component, Input, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';
import { first } from 'rxjs';

import { RouterLink } from '@angular/router';
import { PageModule } from './pages/page-module';
import { AdminModule } from './admin-pages/admin-module';
import { Header } from './pages/nav/header/header';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,FormsModule,PageModule,AdminModule,Header,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularapp');

}


