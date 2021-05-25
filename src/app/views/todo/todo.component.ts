import { Sort } from '@angular/material/sort';
import { Component, OnInit } from '@angular/core';

export interface ITODO {
  name: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  ngOnInit(): void {}

  todo: ITODO[] = [
    { name: 'create dashboard for polls ' },
    { name: 'create the stacked menu in the navbar drawer' },
    { name: 'create the display graph' },
    {
      name: 'conenct an nytimes or wsjm api to the website to get polling data',
    },
    { name: 'create the opening banner to the site' },
    { name: 'create a blog formatted page' },
    { name: 'create a reports pages with users based off fakerjs' },
  ];

  sortedData: ITODO[];

  constructor() {
    this.sortedData = this.todo.slice();
  }

  sortData(sort: Sort) {
    const data = this.todo.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
