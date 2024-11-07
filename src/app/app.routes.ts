import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeatingComponent } from './components/heating/heating.component';
import { SanitaryComponent } from './components/sanitary/sanitary.component';
import { ConstructionRenovationComponent } from './components/construction-renovation/construction-renovation.component';
import { ElectricalComponent } from './components/electrical/electrical.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { VentilationComponent } from './components/ventilation/ventilation.component';
import { CergaComponent } from './components/cerga/cerga.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'heating', loadChildren: () => import('./components/heating/heating/heating.module').then(m => m.HeatingModule) },
    { path: 'ventilation', loadChildren: () => import('./components/ventilation/ventilation/ventilation.module').then(m => m.VentilationModule) },
    { path: 'sanitary', loadChildren: () => import('./components/sanitary/sanitary/sanitary.module').then(m => m.SanitaryModule) },
    { path: 'constructionRenovation', loadChildren: () => import('./components/construction-renovation/construction-renovation/construction-renovation.module').then(m => m.ConstructionRenovationModule) },
    { path: 'electrical', loadChildren: () => import('./components/electrical/electrical/electrical.module').then(m => m.ElectricalModule) },
    { path: 'cerga', loadChildren: () => import('./components/cerga/cerga/cerga.module').then(m => m.CergaModule) },
    { path: 'about', loadChildren: () => import('./components/about/about/about.module').then(m => m.AboutModule) },
    { path: 'contact', loadChildren: () => import('./components/contact/contact/contact.module').then(m => m.ContactModule) },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ];
