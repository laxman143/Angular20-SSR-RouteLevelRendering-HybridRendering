import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  http = inject(HttpClient);

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe();
  }

}
