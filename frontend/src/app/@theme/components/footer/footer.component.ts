import { Component } from '@angular/core';

@Component({
  selector: 'page-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <footer>Footer</footer>
    <span class="created-by">Created with ♥ by <b><a href="http://codingossip.com" target="_blank">CodinGossip</a></b> 2019</span>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
