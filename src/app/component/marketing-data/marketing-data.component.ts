import { Component, OnInit, ElementRef } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-marketing-data',
  templateUrl: './marketing-data.component.html',
  styleUrls: ['./marketing-data.component.css']
})
export class MarketingDataComponent implements OnInit {

  constructor(private readonly meta: MetaService) { 
    this.meta.setTitle('Monitize365 - Marketing Data');
    this.meta.setTag('og:description', 'Monitize365 Residential and Business level GEO-fencing in the mobile display marketplace uses our new micro-targeting technology to pinpoint potential customers with unprecedented accuracy and efficiency.');
    this.meta.setTag('twitter:description', 'Monitize365 Residential and Business level GEO-fencing in the mobile display marketplace uses our new micro-targeting technology to pinpoint potential customers with unprecedented accuracy and efficiency.');

    this.meta.setTag('og:keyword', 'Monitize365, Residential Geofencing, Business Geofencing, Commercial Geofencing, Monitize365 with Big Data');
    this.meta.setTag('twitter:keyword', 'Monitize365, Residential Geofencing, Business Geofencing, Commercial Geofencing, Monitize365 with Big Data');

    this.meta.setTag('og:title', 'Monitize365 - Marketing Data');
    this.meta.setTag('twitter:title', 'Monitize365 - Marketing Data');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo-fb.jpg');
    this.meta.setTag('twitter:image', '../../assets/images/logo-twitter.jpg');
  }

  ngOnInit() {
  }

}
