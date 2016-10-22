import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  @ViewChild('btn') btn;
  
  message: string;

  ngOnInit() {
    Observable.fromEvent(this.getNativeElement(this.btn), 'click')
              .filter((event: KeyboardEvent) => event.shiftKey)
              .map(event => 'Text ok !')
              .subscribe(result => this.message = result);
  }

  getNativeElement(element) {
    return element.nativeElement;
  }

}
