import { Component, OnInit } from '@angular/core';

// finds the corresponding tag in the index file
@Component({
  selector: 'app-root',
  // this below is the html we'll manipulate
  template:`
  <router-outlet></router-outlet>
`,
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
    console.log('********************************AppComponent ngOnInit called');

  }
}
