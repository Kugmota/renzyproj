import { Component, OnInit } from '@angular/core';
import { Info } from './info'

interface Data {
  fullname: string;
  address: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public inf: Info;
  public listOfInfo: Array<Info>;

  constructor() {
    this.inf = new Info();
    this.listOfInfo = new Array<Info>();
   }

  ngOnInit() {
  }

  onSubmit(fillup){
    console.log(fillup);
    this.listOfInfo.push(fillup.form.value);
    fillup.form.reset();
  }


  onEdit(info){
    this.inf = info;
    this.listOfInfo = this.listOfInfo.filter(item => {
      if(item != info){
        return item;
      }
    })
  }


}
