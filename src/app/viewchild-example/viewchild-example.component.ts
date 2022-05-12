import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Child3Component } from './child3/child3.component';

@Component({
  selector: 'app-viewchild-example',
  templateUrl: './viewchild-example.component.html',
  styleUrls: ['./viewchild-example.component.scss']
})
export class ViewchildExampleComponent implements AfterViewInit {

  @ViewChild(Child3Component) child: Child3Component;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this.child.whoAmI()); // I am a child component!
  }

}
