import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { AngularRedditComponent } from './angular-reddit/angular-reddit.component';
import { AngularRedditArticleComponent } from './angular-reddit-article/angular-reddit-article.component';
import { InventoryProductRowComponent } from './inventory-product-row/inventory-product-row.component';
import { InventoryProductListComponent } from './inventory-product-list/inventory-product-list.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { PriceServiceDemoComponent } from './price-service-demo/price-service-demo.component';
import { YoutubeSearchComponent, YoutubeSearchService, youtubeSearchInjectables } from './youtube-search/youtube-search.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SpotifyArtistComponent } from './spotify-artist/spotify-artist.component';
import { SpotifyAlbumComponent } from './spotify-album/spotify-album.component';
import { SpotifySearchComponent, SpotifyService } from './spotify-search/spotify-search.component';
import { SpotifyTrackComponent } from './spotify-track/spotify-track.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HelloWorldComponent },
    { path: 'angular', component: AngularRedditComponent },
    { path: 'angulararticle', component: AngularRedditArticleComponent },
    { path: 'sku', component: DemoFormSkuComponent },
    { path: 'inventorylist', component: InventoryProductListComponent },
    { path: 'inventoryrow', component: InventoryProductRowComponent },
    { path: 'price', component: PriceServiceDemoComponent },
    { path: 'searchbox', component: SearchBoxComponent },
    { path: 'searchresult', component: SearchResultComponent },
    { path: 'useritem', component: UserItemComponent },
    { path: 'userlist', component: UserListComponent },
    { path: 'youtube', component: YoutubeSearchComponent },
    { path: 'spotifysearch', component: SpotifySearchComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent,
    AngularRedditComponent,
    AngularRedditArticleComponent,
    InventoryProductRowComponent,
    InventoryProductListComponent,
    DemoFormSkuComponent,
    PriceServiceDemoComponent,
    YoutubeSearchComponent,
    SearchBoxComponent,
    SearchResultComponent,
    YoutubeSearchComponent,
    SpotifyArtistComponent,
    SpotifyAlbumComponent,
    SpotifySearchComponent,
    SpotifyTrackComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes) // routes
  ],
  providers: [
    youtubeSearchInjectables,
    SpotifyService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
