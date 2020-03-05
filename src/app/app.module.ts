import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';

import { MetaModule } from '@ngx-meta/core';

import { DemoMaterialModule } from 'src/material-module';

import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { GeoFenceComponent } from './component/geo-fence/geo-fence.component';
import { ServicesComponent } from './component/services/services.component';
import { MarketingDataComponent } from './component/marketing-data/marketing-data.component';
import { TeamComponent } from './component/team/team.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    GeoFenceComponent,
    ServicesComponent,
    MarketingDataComponent,
    TeamComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    MetaModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    DemoMaterialModule,  
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
