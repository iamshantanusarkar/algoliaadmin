import { Component } from '@angular/core';

@Component({
    selector: 'page-footer',
    styleUrls: ['./footer.component.scss'],
    template: `
        <footer>
            <span class="created-by">Created with ♥ by <b><a href="http://codingossip.com" target="_blank">CodinGossip</a></b> 2019</span>
            <div class="socials">
                <a href="#" target="_blank"><i class="icon iconsfacebook"></i></a>
                <a href="#" target="_blank"><i class="icon iconstwitter"></i></a>
                <a href="#" target="_blank"><i class="icon iconsgithub"></i></a>
                <a href="#" target="_blank"><i class="icon iconslinkedin"></i></a>
            </div>
        </footer>
    `,
})
export class FooterComponent {
}
