import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { GeoFenceComponent } from './component/geo-fence/geo-fence.component';
import { ServicesComponent } from './component/services/services.component';
import { MarketingDataComponent } from './component/marketing-data/marketing-data.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'geo-fence', component: GeoFenceComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'marketing-data', component: MarketingDataComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
