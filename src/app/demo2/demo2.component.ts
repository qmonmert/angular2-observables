import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Point } from './../model/point';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {

  @ViewChild('right') right;

  position: any;

  ngOnInit() {
    Observable.fromEvent(this.getNativeElement(this.right), 'click')
              .map(event => new Point(10, 0))
              .startWith({x: 40, y: 40})
              .scan((acc: Point, curr: Point) => { return { x:acc.x + curr.x, y: acc.y } })
              .subscribe(result => this.position = result);
  }

  getNativeElement(element) {
    return element.nativeElement;
  }

}
