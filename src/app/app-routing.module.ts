import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillsPageComponent } from './pages/skills/skills-page.component';
import { ExperiencePageComponent } from './pages/experience/experience-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'skills', component: SkillsPageComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'experience', component: ExperiencePageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
