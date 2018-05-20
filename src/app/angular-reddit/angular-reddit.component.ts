import { Component, OnInit } from '@angular/core';
import { Article } from '../angular-reddit-article/angular-reddit-article.component';

@Component({
  selector: 'app-angular-reddit',
  templateUrl: './angular-reddit.component.html',
  styleUrls: ['./angular-reddit.component.css']
})
export class AngularRedditComponent implements OnInit {

  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 10),
      new Article('React JS', 'http://reactjs.com', 5),
    ];
  }

  ngOnInit() {
  }

  AddArticle(title: HTMLInputElement, link: HTMLInputElement, votes: HTMLInputElement): boolean {
    // alert(`Title: ${title.value}. Link: ${link.value}`);
    // console.log(`Title: ${title.value}. Link: ${link.value}`);

    if (title.value !== '') {
      this.articles.push(new Article(title.value, link.value, Number(votes.value)));
      this.SortArticles();

      // clear the input fields
      title.value = '';
      link.value = '';
      votes.value = '';
    }

    return false;
  }

  SortArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
