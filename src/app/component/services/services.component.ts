import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private readonly meta: MetaService) {
    this.meta.setTitle('Monitize365 - Services');
    this.meta.setTag('og:description', 'Monitize365 Residential and Business level GEO-fencing in the mobile display marketplace uses our new micro-targeting technology to pinpoint potential customers with unprecedented accuracy and efficiency.');
    this.meta.setTag('twitter:description', 'Monitize365 Residential and Business level GEO-fencing in the mobile display marketplace uses our new micro-targeting technology to pinpoint potential customers with unprecedented accuracy and efficiency.');

    this.meta.setTag('og:keyword', 'Monitize365, Residential Geofencing, Business Geofencing, Commercial Geofencing, Micro-targeting Technology, Monitize365 with Big Data');
    this.meta.setTag('twitter:keyword', 'Monitize365, Residential Geofencing, Business Geofencing, Commercial Geofencing, Micro-targeting Technology, Monitize365 with Big Data');

    this.meta.setTag('og:title', 'Monitize365 - Services');
    this.meta.setTag('twitter:title', 'Monitize365 - Services');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo-fb.jpg');
    this.meta.setTag('twitter:image', '../../assets/images/logo-twitter.jpg');
   }

  ngOnInit() {
  }

}
