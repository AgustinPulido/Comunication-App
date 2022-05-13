import { Component, OnInit, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Child3Component } from './child3/child3.component';

@Component({
  selector: 'app-viewchild-example',
  templateUrl: './viewchild-example.component.html',
  styleUrls: ['./viewchild-example.component.scss']
})
export class ViewchildExampleComponent implements AfterViewInit {

  @ViewChild(Child3Component) child: Child3Component;
  @ViewChild('ModalComponent') modal: TemplateRef<any>;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.child.whoAmI()); // I am a child component!
  }

  openModal(): void {
    let dialogRef = this.dialog.open(this.modal, { disableClose: true });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

}
