import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment.prod';

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    // title = 'frontend';
    
    ngOnInit() {}
}
