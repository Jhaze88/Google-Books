import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookStoreComponent } from './components/book-store/book-store.component';
import { ApiService } from './services/api.service';
import { InfoDetailsComponent } from './components/info-details/info-details.component';
import { HomeBookComponent } from './components/home-book/home-book.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BookDetailsComponent,
    BookCardComponent,
    BookStoreComponent,
    InfoDetailsComponent,
    HomeBookComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
