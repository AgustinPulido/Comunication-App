import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CharacterResult, CharacterApi } from '../../models/character';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  @Output() characters = new EventEmitter<CharacterResult[]>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getRickAndMortyCharacters();
  }

  getRickAndMortyCharacters() {
    return this.http.get<CharacterApi[]>("https://rickandmortyapi.com/api/character").subscribe((characters: any) => {
      console.log(characters);
      this.characters.emit(characters.results);
    })
  }

}
