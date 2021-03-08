import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookStoreComponent } from './components/book-store/book-store.component';
import { HomeBookComponent } from './components/home-book/home-book.component';
import { InfoDetailsComponent } from './components/info-details/info-details.component';

const routes: Routes = [
  { path: '', component: HomeBookComponent },
  { path: 'book-store', component: BookStoreComponent },
  { path: 'book-details', component: BookDetailsComponent },
  { path: 'info-details', component: InfoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
