import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  // { path: 'about', component: AboutComponent },
  // { path: 'services', component: ServicesComponent },
  // { path: 'projects', component: ProjectsComponent },
  // { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
