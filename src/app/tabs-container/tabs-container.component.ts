import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabsContainerComponent implements OnInit {
  @Input() tabs;

  mockTabs = [
    {title: 'Dynamic Title 1', content: 'Dynamic content 1', disabled: false},
    {title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true},
    {title: 'Dynamic Title 3', content: 'Dynamic content 3', disabled: false}
  ];



  
  

  constructor() { 

  this.tabs = this.mockTabs;

  }

  ngOnInit() {
  }

}
