import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Gallery } from './pages/gallery/gallery';
import { AdminHome } from './admin-pages/home/home';
import { Member } from './admin-pages/member/member';
import { Report } from './admin-pages/report/report';
import { Layout } from './pages/layout/layout';
import { AdminLayout } from './admin-pages/admin-layout/admin-layout';

export const routes: Routes = [
    {path:"",component:Layout,children:[
        {path:"",component:Home},
        {path:"hakkimizda",component:About},
        {path:"iletisim",component:Contact},
        {path:"galeri",component:Gallery}
    ]},
    {path:"admin",component:AdminLayout,children:[
        {path:"",component:AdminHome},
        {path:"uyeler",component:Member},
        {path:"raporlar",component:Report}
    ]},


];
