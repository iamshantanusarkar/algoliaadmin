import { Component, OnInit } from '@angular/core';

// import { SeoService } from './_services/seo.service';
import { LoaderService } from './_services/loader.service';

@Component({
    selector: 'app-root',
    template: '<router-outlet><span *ngIf="showLoader" class="loading"></span></router-outlet>',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    // title = 'frontend';
    showLoader: boolean;

    constructor(
      // private seo: SeoService,
      private loaderService: LoaderService
    ) { }

    ngOnInit() {
      // this.seo.generateTags({
      //   title: 'Contact Page',
      //   description: 'Contact me through this awesome search engine optimized Angular component',
      //   image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
      //   slug: 'contact-page'
      // });

      this.loaderService.status.subscribe((val: boolean) => {
        this.showLoader = val;
    });
    }
}
