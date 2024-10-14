import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeatingComponent } from './components/heating/heating.component';
import { SanitaryComponent } from './components/sanitary/sanitary.component';
import { ConstructionRenovationComponent } from './components/construction-renovation/construction-renovation.component';
import { ElectricalComponent } from './components/electrical/electrical.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'heating', component: HeatingComponent},
    {path:'sanitary', component: SanitaryComponent},
    {path:'constructionRenovation', component: ConstructionRenovationComponent},
    {path:'electrical', component: ElectricalComponent},
    {path:'about', component: AboutComponent},
    {path:'contact', component: ContactComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
