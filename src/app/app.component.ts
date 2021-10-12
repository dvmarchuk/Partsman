import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Partsman';
  constructor(private httpClient: HttpClient) {  }

  ngOnInit(): void {
    this.httpClient.get<any[]>('http://localhost:8080/users');
  }


}
