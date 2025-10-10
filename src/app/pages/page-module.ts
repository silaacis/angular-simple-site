import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Gallery } from './gallery/gallery';
import { Home } from './home/home';
import { RouterModule } from '@angular/router';
import { Layout } from './layout/layout';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule,About,Contact,Gallery,Home,Layout
  ],
  exports:[About,Contact,Gallery,Home,Layout]
})
export class PageModule { }
