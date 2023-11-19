import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css'],
})
export class DirectiveDemoComponent implements OnInit {
  dynamicClasses = { 'my-border': true, 'my-feature': false };

  dynamicStyles = {
    'background-color': '#444',
    color: '#fff',
  };

  friends = ['Monica', 'Joey', 'Ross', 'Rachel'];

  todoCollection = [
    { id: 1, label: 'shopping' },
    { id: 2, label: 'planting' },
    { id: 3, label: 'insurance' },
    { id: 4, label: 'grocery' },
  ];

  count = 3;

  constructor() {}

  ngOnInit(): void {}

  onToggleClasses() {
    this.dynamicClasses['my-border'] = !this.dynamicClasses['my-border'];
    this.dynamicClasses['my-feature'] = !this.dynamicClasses['my-feature'];
  }

  onLightTheme() {
    this.dynamicStyles = {
      'background-color': '#fff',
      color: '#444',
    };
  }
  onDarkTheme() {
    this.dynamicStyles = {
      'background-color': '#444',
      color: '#fff',
    };
  }
}
