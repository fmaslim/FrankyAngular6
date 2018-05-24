import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';
import 'rxjs/add/observable/fromEvent';

export class SearchResult {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;

  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.title = obj && obj.title || null;
    this.description = obj && obj.description || null;
    this.thumbnailUrl = obj && obj.thumbnailUrl || null;
    this.videoUrl = obj && obj.videoUrl || `https://www.youtube.com/watch?V=${this.id}`;
  }
}

const YOUTUBE_API_KEY = 'AIzaSyD9hr4UpAnCXq5LFotOlUv47ZAJO3Qp3Bs';
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

@Injectable()
export class YoutubeSearchService {
  constructor(private http: HttpClient, @Inject(YOUTUBE_API_KEY) private apiKey: string, @Inject(YOUTUBE_API_URL) private apiURL: string) {

  }

  search(query: string) {
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');

    const queryUrl = `${this.apiURL}?${params}`;

    return this.http.get(queryUrl).map((response: any) => {
      return <any>response['items'].map(item => {
        return new SearchResult({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.high.url
        });
      });
    });
  }
}

export const youtubeSearchInjectables: Array<any> = [
  { provide: YoutubeSearchService, useClass: YoutubeSearchService },
  { provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY },
  { provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL }
];

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YoutubeSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
