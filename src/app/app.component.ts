import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { environment } from '../environments/environment';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public url;
  public loading: boolean = false;

  title = 'monitize365-frontend-serverless';
public ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
        const bases = this.document.getElementsByTagName('base');

        if (bases.length > 0) {
            bases[0].setAttribute('href', environment.baseHref);
        }
    }
}


 constructor(@Inject(PLATFORM_ID) private platformId: any, @Inject(DOCUMENT) private document: any,private router: Router) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          console.log(this.loading)
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          console.log(this.loading)
          break;
        }
        default: {
          break;
        }
      }
    });  
 }
}
