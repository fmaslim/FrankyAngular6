import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-reddit',
  templateUrl: './angular-reddit.component.html',
  styleUrls: ['./angular-reddit.component.css']
})
export class AngularRedditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  AddArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    // alert(`Title: ${title.value}. Link: ${link.value}`);
    console.log(`Title: ${title.value}. Link: ${link.value}`);
    return false;
  }
}
