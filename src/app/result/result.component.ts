import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() datas:any[];
  // @Input() genderData:string;
  // @Input() addressData:string;
  // @Input() birthData:string;
  // @Input() ageData:string;
  // @Input() contactData:string;
  // @Input() emailData:string;
  // @Input() religionData:string;
  // @Input() organsData:string;
  @Output() childEvent = new EventEmitter();
  @Output() resultEvent = new EventEmitter();
  public cdata: any;
  public donors: []
  
  

  constructor() { }

  ngOnInit() {
  }

}
