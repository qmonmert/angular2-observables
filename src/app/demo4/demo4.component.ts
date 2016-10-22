import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Point } from './../model/point';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.css']
})
export class Demo4Component implements OnInit {

  position: any;

  ngOnInit() {
    const leftArrow$ = Observable.fromEvent(document, 'keydown')
              .filter((event: KeyboardEvent) => event.key === 'ArrowLeft')
              .mapTo(position => this.decrement(position, 'x', 10));

    const rightArrow$ = Observable.fromEvent(document, 'keydown')
              .filter((event: KeyboardEvent) => event.key === 'ArrowRight')
              .mapTo(position => this.increment(position, 'x', 10));

    const upArrow$ = Observable.fromEvent(document, 'keydown')
              .filter((event: KeyboardEvent) => event.key === 'ArrowUp')
              .mapTo(position => this.decrement(position, 'y', 10));

    const downArrow$ = Observable.fromEvent(document, 'keydown')
              .filter((event: KeyboardEvent) => event.key === 'ArrowDown')
              .mapTo(position => this.increment(position, 'y', 10));

    Observable.merge(leftArrow$, rightArrow$, upArrow$, downArrow$)
              .startWith({x: 160, y: 160})
              .scan((acc: Point, curr) => curr(acc))
              .subscribe(result => this.position = result);
  }

  increment(obj, prop, value) {
    const newValue = obj[prop] + value;
    if (newValue >= 0 && newValue <= 320) {
      return Object.assign({}, obj, {[prop]: newValue});
    } else {
      return Object.assign({}, obj, {});
    }
  }

  decrement(obj, prop, value) {
    const newValue = obj[prop] - value;
    if (newValue >= 0 && newValue <= 320) {
      return Object.assign({}, obj, {[prop]: newValue});
    } else {
      return Object.assign({}, obj, {});
    }
  }

}
