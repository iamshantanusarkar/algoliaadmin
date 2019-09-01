import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  generateTags(config) {
    // default values
    config = {
        title: 'Angular <3 Linkbots',
        description: 'My SEO friendly Angular Component',
        keywords: '',
        author: '',
        robots: 'index, follow',
        image: 'https://angularfirebase.com/images/logo.png',
        slug: '',
        ogTags: false,
        twitterTags: false,
        ogDescription: 'My SEO friendly Angular Component',
        ...config
    }

    this.title.setTitle(config.title);
    this.meta.addTag({name: 'keywords', content: config.keywords});
    this.meta.addTag({name: 'description', content: config.description});
    this.meta.addTag({name: 'author', content: config.author});
    this.meta.addTag({name: 'robots', content: config.robots});

    if (config.twitterTags) {
      this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
      this.meta.updateTag({ name: 'twitter:site', content: '@angularfirebase' });
      this.meta.updateTag({ name: 'twitter:title', content: config.title });
      this.meta.updateTag({ name: 'twitter:description', content: config.description });
      this.meta.updateTag({ name: 'twitter:image', content: config.image });
    }

    if (config.ogTags) {
      this.meta.updateTag({ property: 'og:type', content: 'article' });
      this.meta.updateTag({ property: 'og:site_name', content: 'AngularFirebase' });
      this.meta.updateTag({ property: 'og:title', content: config.title });
      this.meta.updateTag({ property: 'og:description', content: config.description });
      this.meta.updateTag({ property: 'og:image', content: config.image });
      this.meta.updateTag({ property: 'og:url', content: `https://instafire-app.firebaseapp.com/${config.slug}` });
    }
  }

}
