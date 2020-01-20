import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Info } from '../register/info';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() listOfInfoChild: Array<Info>;
  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onEdit(form){
    this.childEvent.emit(form);
  
  }

}
