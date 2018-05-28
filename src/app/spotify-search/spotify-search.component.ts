import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class SpotifyService {
  constructor(public http: HttpClient) {
  }

  // This code performs an HTTP Get request to the URL, passing our query as the search term
  // and type hardcoded to track.
  // This HTTP call returns an Observable.

  // https://stackoverflow.com/questions/46005430/property-json-does-not-exist-on-type-object
  // For future visitors: In the new HttpClient (Angular 4.3+), the response object is JSON by default,
  // so you don't need to do response.json().data anymore. Just use response directly.
  searchTrack(query: string) {
    const params: string = [
      `q=${query}`,
      `type=track`
    ].join('&');
    const queryURL = `https://api.spotify.com/v1/search?${params}`;
    return this.http.get(queryURL);
  }
}

@Component({
  selector: 'app-spotify-search',
  templateUrl: './spotify-search.component.html',
  styleUrls: ['./spotify-search.component.css']
})
export class SpotifySearchComponent implements OnInit {
  query = 'blah';
  results: Object;

  constructor(private spotifySvc: SpotifyService,
              private router: Router,
              private route: ActivatedRoute) {

                // Note that queryParams is different from route.params. Whereas route.params match parameters
                // in the route, queryParams match parameters in the query string
                // In this case, there is no query params, we set this.query to an empty string
                this.route.queryParams.subscribe(params => this.query = params['query'] || '');
              }

  ngOnInit() {
  }

  submit(newquery: string) {
    this.router.navigate(['spotifysearch'], { queryParams: { query: newquery }}).then(() => this.search());
  }

  search() {
    console.log('this.query: ', this.query);
    if (!this.query) {
      console.log('query is empty. Service is not being called.');
      return;
    }
    this.spotifySvc.searchTrack(this.query).subscribe(response => this.renderResults(response));
  }

  renderResults(response: any) {
    console.log('Resetting search results on every search.');
    this.results = null;

    console.log('Rendering search results.');
    if (response && response.tracks && response.tracks.items) {
      this.results = response.tracks.items;
    }
  }
}
