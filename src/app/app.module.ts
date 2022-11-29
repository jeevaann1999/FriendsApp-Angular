import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchFriendComponent } from './search-friend/search-friend.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

const myRoute:Routes=[
  {
    path:"",
    component:AddFriendsComponent
  },
  {
    path:"view",
    component:ViewFriendsComponent
  },
  {
    path:"search",
    component:SearchFriendComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    AddFriendsComponent,
    ViewFriendsComponent,
    NavbarComponent,
    SearchFriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
