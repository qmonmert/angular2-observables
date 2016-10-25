import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Line } from './../model/line';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.css']
})
export class Demo6Component implements OnInit {

  lines: any[] = [];

  ngOnInit() {
    const OFFSET_X = 10;
    const OFFSET_Y = 66;

    Observable
      .fromEvent(document, 'mousemove')
      .map((event: MouseEvent) => {
        return { x : event.pageX - OFFSET_X, y : event.pageY - OFFSET_Y };
      })
      .pairwise()
      .map(positions => {
        const p1 = positions[0];
        const p2 = positions[1];
        return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y };
      })
      .subscribe(line => { this.lines = [...this.lines, line]});
  }

}
