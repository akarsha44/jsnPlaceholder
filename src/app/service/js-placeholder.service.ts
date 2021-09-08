import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface userData {
  name: String;
  email: String;
  website: String;
}

@Injectable({
  providedIn: 'root',
})
export class JsPlaceholderService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<userData[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
