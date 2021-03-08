import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsEntity } from 'src/app/models/book';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  /**
   * @public
   * @name bookSelected
   * @type ItemsEntity
   * @description variable typed in ItemsEntity to access fields
   */
  public bookSelected: ItemsEntity;

  /**
   * @public
   * @name showMe
   * @type boolean = false
   * @description Boolean variable used to show and hide the book description
   */
  public showMe: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ApiService
  ) {
    this.initGetBookById();
  }

  ngOnInit(): void {}

  /**
   * @public
   * @name toogle
   * @description method to show and hide
   * @returns void
   */
  public toogle(): void {
    this.showMe = !this.showMe;
  }

  /**
   * @private
   * @name initGetBookById
   * @description this method uses the pipe operator to queryParams using the switchMap function to avoid making two subscribes, and taking the second value issued by the oservable
   * @returns void
   */
  private initGetBookById(): void {
    this.route.queryParams
      .pipe(
        switchMap((params) => this.productService.getProductById(params.id))
      )
      .subscribe((data) => {
        this.bookSelected = data;
      });
  }
}
