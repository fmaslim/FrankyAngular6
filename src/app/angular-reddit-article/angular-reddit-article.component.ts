import { Component, OnInit, HostBinding, Input } from '@angular/core';

export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  domain(): string {
    try {
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}

@Component({
  selector: 'app-angular-reddit-article',
  templateUrl: './angular-reddit-article.component.html',
  styleUrls: ['./angular-reddit-article.component.css']
})
export class AngularRedditArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';

  @Input() article: Article;

  constructor() {
    // this.article = new Article('Angular 2', 'http://angular.io', 10);
  }

  ngOnInit() {
  }

  voteUp() {
    ++this.article.votes;
    return false;
  }

  voteDown() {
    if (this.article.votes > 0) {
      --this.article.votes;
    }

    return false;
  }

}
