import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book, ItemsEntity } from 'src/app/models/book';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.scss'],
})
export class BookStoreComponent implements OnInit {
  /**
   * @public
   * @name bookArr
   * @type Array<ItemsEntity>
   * @description variable empty array
   */
  public bookArr: Array<ItemsEntity> = [];

  /**
   * @public
   * @name keyWord
   * @type string
   * @description variable used for the search bar initialized to empty string
   */
  public keyWord: string = '';

  /**
   * @public
   * @name index
   * @type number
   * @description variable used to pass the martence index as an argument to the get methods
   */
  public index: number = 0;

  /**
   * @public
   * @name results
   * @type number
   * @description variable used to pass as an argument to methods get maximum result of the index
   */
  public results: number = 40;

  /**
   * @public
   * @name value
   * @type Array<number>
   * @description number array variable used for selecting the amount of books shown
   */
  public value: Array<number> = [5, 10, 15, 20];

  /**
   * @public
   * @name load
   * @type boolean
   * @description Boolean variable used to load charge
   */
  public load: boolean = true;

  constructor(private api: ApiService, private router: Router) {
    setTimeout(() => {
      this.getBook();
    }, 1000);
  }

  /**
   * @private
   * @name loading
   * @description This method uses the setTimeout to load the gif image before the books arrive
   * @returns void
   */
  private loading(): void {
    setTimeout(() => {
      this.load = !this.load;
    }, 1500);
  }

  ngOnInit(): void {
    this.loading();
  }

  /**
   * @private
   * @name getBook
   * @description this method uses the getBook service to subscribe to the  object : Book
   * @returns void
   */
  private getBook(): void {
    this.api.getBooks(this.index, this.results).subscribe((data: Book) => {
      data.items.forEach((req) => {
        this.bookArr.push(req);
      });
    });
  }

  /**
   * @public
   * @name modifyResults
   * @description this method is used on the select and controls the call based on the value chosen by the option
   * @param  [val] number
   * @returns void
   */
  public modifyResults(val: number): void {
    this.results = val;
    this.api.getBooks(this.index, val).subscribe((data) => {
      this.bookArr = [];
      if (this.keyWord) {
        this.bookArr = data.items.filter((res) => {
          return res.volumeInfo.title
            .toLocaleLowerCase()
            .match(this.keyWord.toLocaleLowerCase());
        });
      } else {
        data.items.forEach((req) => {
          this.bookArr.push(req);
        });
      }
    });
    this.results = val;
  }

  /**
   * @public
   * @name goToDetails
   * @description method to navigate to access the details of the book carrying the id selected through the query params
   * @param  [product] ItemsEntity
   * @returns void
   */
  public goToDetails(product: ItemsEntity): void {
    this.router.navigate([`/book-details`], {
      queryParams: { id: product.id },
    });
  }

  /**
   * @public
   * @name searchBook
   * @description method used in the search bar by calling getBooks and using bookArr where I push the request and filter the contents based on the title searched
   * @returns void
   */
  public searchBook(): void {
    this.api.getBooks(this.index, this.results).subscribe((data) => {
      this.bookArr = [];
      if (this.keyWord == '') {
        data.items.forEach((req) => {
          this.bookArr.push(req);
        });
      } else {
        this.bookArr = data.items.filter((res) => {
          return res.volumeInfo.title
            .toLocaleLowerCase()
            .match(this.keyWord.toLocaleLowerCase());
        });
      }
    });
  }
}
