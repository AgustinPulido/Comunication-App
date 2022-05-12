import { Component, OnInit } from '@angular/core';
import { CharacterResult } from '../models/character';

@Component({
  selector: 'app-output-example',
  templateUrl: './output-example.component.html',
  styleUrls: ['./output-example.component.scss']
})
export class OutputExampleComponent implements OnInit {

  characters: CharacterResult[];

  constructor() { }

  ngOnInit(): void {
  }

  acceptData(data: any) {
    this.characters = data;
  }

}
