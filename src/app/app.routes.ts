import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeatingComponent } from './components/heating/heating.component';
import { SanitaryComponent } from './sanitary/sanitary.component';
import { ConstructionRenovationComponent } from './construction-renovation/construction-renovation.component';
import { ElectricalComponent } from './electrical/electrical.component';
import { VentilationMaintenanceComponent } from './ventilation-maintenance/ventilation-maintenance.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'heating', component: HeatingComponent},
    {path:'sanitary', component: SanitaryComponent},
    {path:'constructionRenovation', component: ConstructionRenovationComponent},
    {path:'electrical', component: ElectricalComponent},
    {path:'about', component: AboutComponent},
    {path:'contact', component: ContactComponent},
    {path:'ventilationMaintenance', component: VentilationMaintenanceComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
