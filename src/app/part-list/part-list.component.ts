import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PartsTechAPIService} from './Services/parts-tech-api.service';

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.css']
})
export class PartListComponent implements OnInit {

  constructor( private myAPI: PartsTechAPIService) { }


  ngOnInit(): void {
    console.log('test');
  }



  // tslint:disable-next-line:typedef
  callApi() {
    console.log(this.myAPI.getAPI());
  }

}
