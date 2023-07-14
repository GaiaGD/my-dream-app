import { Component, OnInit } from '@angular/core';

// finds the corresponding tag in the index file
@Component({
  selector: 'app-root',
  // this below is the html we'll manipulate
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// some rules I gave to follow
export class AppComponent implements OnInit {
  // title: string;

  constructor () {
    // this.name = '?';
    // this.title = '?';
  }

  ngOnInit(): void {
    // this.title = "title"
  }
}
