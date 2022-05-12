import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-input-example',
  templateUrl: './input-example.component.html',
  styleUrls: ['./input-example.component.scss']
})
export class InputExampleComponent implements OnInit {

  usuarios: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    return this.http.get("https://randomuser.me/api/?results=3").subscribe((users: any) => {
      this.usuarios = users.results;
      console.log(users.results);
    })
  }

}
