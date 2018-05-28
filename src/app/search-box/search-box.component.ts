import { map, filter, debounce, debounceTime } from 'rxjs/operators';
import { YoutubeSearchService } from './../youtube-search/youtube-search.component';
import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { SearchResult } from '../youtube-search/youtube-search.component';
import { Observable, fromEvent } from 'rxjs';

// The following rules have been designed by the RxJS team to help JavaScript developers refactor import paths:

// 1. rxjs/operators: Contains all pipeable operators.
// import { map, filter, scan } from 'rxjs/operators';

// 2. rxjs: Contains creation methods, types, schedulers, and utilities.
// import { Observable, Subject, asapScheduler, pipe, of, from,
//   interval, merge, fromEvent } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtubeSvc: YoutubeSearchService, private el: ElementRef) { }

  ngOnInit() {
    // We say that this class implements OnInit because we want to use the ngOnInit lifecycle callback.
    // If a class implements OnInit then the ngOnInit function will be called after the first change detection check

    // ngOnInit is a good place to do initialization (vs the constructor) because inputs set on a component
    // are not available in the constructor

    fromEvent(this.el.nativeElement, 'keyup') // convert the keyup event into an observable stream.
    .pipe(map((e: any) => console.log(e.target.value))) // extract the value of the input
    .pipe(filter.call((text: string) => text.length > 1)) // stream will not emit any search string for which the length is less than 1
    .pipe(debounceTime(250)); // throttle requests that come in faster than 250ms.

    // using do on a stream is a way to perform a function mid-stream for each event, but it does not change
    // anything in the stream. The idea her eis that we've got our search, it has enough characters, and
  }

  // On this input box, we want to watch for keyup events. The thing is, if we simply did a search after every keyup
  // that wouldn't work very well.

  // There are three things we can do to improve the user experience:
  // a. Filter out any empty or short queries
  // b. "debounce" the input, that is, don't search on every character but only after the user has stopped typing
  // after a short amount of time
  // c. discard any old searches, if the user has made a new search

  // We could manually bind to keyup and call a function on each keyup event and them implement filtering and debouncing
  // However, there is a better way: turn the keyup events into an observable stream

  // RxJs provides a way to listen to events on an emalement using Rx.Observable.fromEvent.

}
