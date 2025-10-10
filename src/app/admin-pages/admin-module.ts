import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHome } from './home/home';
import { Member } from './member/member';
import { Report } from './report/report';
import { AdminLayout } from './admin-layout/admin-layout';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,AdminHome,Member,Report,AdminLayout
  ],
  exports:[AdminHome,Member,Report,AdminLayout]
})
export class AdminModule { }
