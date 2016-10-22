import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Point } from './../model/point';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {

  @ViewChild('left') left;
  @ViewChild('right') right;

  position: any;

  ngOnInit() {
    const left$ = Observable.fromEvent(this.getNativeElement(this.left), 'click')
              .map(event => new Point(-10, 0));

    const right$ = Observable.fromEvent(this.getNativeElement(this.right), 'click')
              .map(event => new Point(10, 0));

    Observable.merge(left$, right$)
              .startWith({x: 40, y: 40})
              .scan((acc: Point, curr: Point) => { 
                const newX = acc.x + curr.x;
                if (newX >= 0 && newX <= 320) {
                  return { x: acc.x + curr.x, y: acc.y };
                } else {
                  return { x: acc.x, y: acc.y };
                }
              })
              .subscribe(result => this.position = result);
  }

  getNativeElement(element) {
    return element.nativeElement;
  }

}
