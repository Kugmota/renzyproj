import { Component, OnInit } from '@angular/core';

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
  public fullname:string;
  public tname: string;
  public gender:string;
  public tgender: string;
  public addresses:string;
  public taddress: string;
  public contact: string;
  public tcontact : string;
  public date : string;
  public tdate : string;
  public age : number;
  public tage : number;
  public emails : number;
  public temail : number;
  public religion: string;
  public treligion: string;
  public organs : string;
  public torgans: string;
  public data: boolean = false;
  public edit: boolean = true;

  public info: any={}
  public infoArr: any[]=[];
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    // this.data = true;
    this.tname = this.fullname;
    this.tgender = this.gender;
    this.taddress = this.addresses;
    this.tcontact = this.contact;
    this.tdate = this.date;
    this.tage=this.age;
    this.temail = this.emails;
    this.treligion = this.religion;
    this.torgans = this.organs;
    this.data = true;
    this.edit = false;
    
  }
  onConfirm(){
    this.info = {
      fullname: this.fullname,
      gender: this.gender,
      addresses: this.addresses,
      contact: this.contact,
      date: this.date,
      age: this.age,
      emails: this.emails,
      religion: this.religion,
      organs: this.organs
    }
    this.tname = this.fullname;
    this.tgender = this.gender;
    this.taddress = this.addresses;
    this.tcontact = this.contact;
    this.tdate = this.date;
    this.tage=this.age;
    this.temail = this.emails;
    this.treligion = this.religion;
    this.torgans = this.organs;
    this.data = true;
    this.edit = false;
    this.infoArr.push(this.info)
    console.log(this.tname, this.tgender, this.taddress, this.tcontact, this.tdate, this.tage, this.temail, this.treligion, this.torgans)
  }

  onEdit(){
    this.data = false;
    this.edit=true;
  }


}
