import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'services',
    title: 'Services',
    component: ServicesComponent,
  },
  {
    path: 'about-us',
    title: 'About Us',
    component: AboutUsComponent,
  },
  {
    path: 'fqa',
    title: 'FQA',
    component: FaqComponent,
  },
  {
    path: 'contact',
    title: 'Contact',
    component: ContactComponent,
  },
  {
    path: 'blog',
    title: 'Blog',
    component: BlogComponent,
  },
];
