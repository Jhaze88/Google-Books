import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, ItemsEntity } from '../models/book';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  /**
   * @public
   * @name apiGoogleBooks
   * @type string
   * @description google books api variable
   */
  public apiGoogleBooks: string;

  constructor(private http: HttpClient) {
    this.apiGoogleBooks = `https://www.googleapis.com/books/v1/volumes?q=trhiller`;
  }

  /**
   * @public
   * @name getBooks
   * @description  get method for calling google book api passing as index argument and maximum index to be dynamic
   * @param [index] number
   * @param [results?] number
   * @returns Observable<Book>
   */
  public getBooks(index: number, results?: number): Observable<Book> {
    return this.http.get<Book>(
      `${this.apiGoogleBooks}&startIndex=${index}&maxResults=${results}`
    );
  }

  /**
   * @public
   * @name getAllBooks
   * @description get method for calling all google book api
   * @returns Observable<Book>
   */
  public getAllBooks(): Observable<Book> {
    return this.http.get<Book>(this.apiGoogleBooks);
  }

  /**
   * @public
   * @name getProductById
   * @description get method for calling google book api passing as dynamic id argument use the pipe operator which takes data as input
   * @param [id] string
   * @returns Observable<ItemsEntity | undefined>
   */
  public getProductById(id: string): Observable<ItemsEntity | undefined> {
    return this.http
      .get<ItemsEntity>(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .pipe(
        map((prod) => {
          if (prod) {
            return { ...prod } as ItemsEntity;
          } else {
            return undefined;
          }
        })
      );
  }
}
