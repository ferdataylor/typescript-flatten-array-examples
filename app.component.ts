import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private dialog: DialogService) {}

  ngOnInit() {
    this.dialog.open({
      title: 'My Dialog',
      content: 'This is my dialog content.',
      inject: {
        myObject: {
          type: MyObject,
          default: {},
        },
      },
    });
  }
}

interface MyObject {
  name: string;
  age: number;
}
