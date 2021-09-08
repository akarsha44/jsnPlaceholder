import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  userData,
  JsPlaceholderService,
} from './service/js-placeholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Todo List';

  apiUserData: Observable<userData[]>;

  constructor(private JsPlaceholderService: JsPlaceholderService) {
    this.apiUserData = this.JsPlaceholderService.getData();
  }

  ngOnInit(): void {}

  display() {
    console.log(this.apiUserData);
  }
}
