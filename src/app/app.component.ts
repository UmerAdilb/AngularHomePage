import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  showH1:boolean = true;
  carList:any =[
    {id:1,
    name:"test1"},
    {id:2,
      name:"test2"},
      {id:3,
        name:"test3"}
  ]

}
