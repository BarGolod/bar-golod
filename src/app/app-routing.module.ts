import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home Page',
      subtitle: 'Welcome to our website',
      content: 'This is the home page content.',
    },
  },
  {
    path: ':slug',
    component: HomeComponent,
    data: {
      title: '',
      subtitle: '',
      content: '',
    },
  },
  {
    path: '**', // Catch-all route for 404
    component: HomeComponent,
    data: {
      title: '404',
      subtitle: 'Page not found',
      content: 'The page you are looking for does not exist.',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
