import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Freshman year ',
    children: [
      {
        name: 'Fall',
        children: [
          { name: 'Programming 1' },
          { name: 'Macroeconomics' },
          { name: 'Intro to chinese 1' },
          { name: 'History of computer science' },
        ],
      },
      {
        name: 'Spring',
        children: [
          { name: 'Programming 2' },
          { name: 'Intro to chinese 2 ' },
          { name: 'Algorithm & data structures' },
          { name: 'Numerical methods' },
          { name: 'Math proofs ' },
        ],
      },
    ],
  },
  {
    name: 'Sophomore year',
    children: [
      {
        name: 'Fall ',
        children: [
          { name: 'Intermediate chinese 1' },
          { name: 'Programming language survey' },
          { name: 'Computer organization ' },
          { name: 'Web design ' },
          { name: 'Discrete math with graph theory' },
        ],
      },
      {
        name: 'Spring',
        children: [
          { name: 'Theory of computation' },
          { name: 'Linear algebra' },
          { name: 'Probability and statistics' },
          { name: 'Abstract algebra' },
          { name: 'Religion and human experience' },
        ],
      },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.scss'],
})
export class PcComponent implements OnInit {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {}
}
