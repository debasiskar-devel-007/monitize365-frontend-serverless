import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-geo-fence',
  templateUrl: './geo-fence.component.html',
  styleUrls: ['./geo-fence.component.css']
})
export class GeoFenceComponent implements OnInit {

  constructor(private readonly meta: MetaService) {
    this.meta.setTitle('Monitize365 - GeoFence');
    this.meta.setTag('og:description', 'Contact us TODAY and submit your queries and questions, and our Support Team at Monitize365 would be happy to have them answered for you as soon as we can.');
    this.meta.setTag('twitter:description', 'Contact us TODAY and submit your queries and questions, and our Support Team at Monitize365 would be happy to have them answered for you as soon as we can.');

    this.meta.setTag('og:keyword', 'Monitize365 Contact Us, Contact Monitize365, Monitize365 Support');
    this.meta.setTag('twitter:keyword', 'Monitize365 Contact Us, Contact Monitize365, Monitize365 Support');

    this.meta.setTag('og:title', 'Monitize365 - GeoFence');
    this.meta.setTag('twitter:title', 'Monitize365 - GeoFence');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo-fb.jpg');
    this.meta.setTag('twitter:image', '../../assets/images/logo-twitter.jpg');
   }

  ngOnInit() {
  }

}
