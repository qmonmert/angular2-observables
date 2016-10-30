import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.css']
})
export class Demo7Component implements OnInit {

  circles: any[] = [];

  ngOnInit() {
    const OFFSET = 25;

    Observable.fromEvent(document, 'mousemove')
              .map((event: MouseEvent) => {
                const x = Math.max(Math.min(event.clientX - OFFSET, 360), 10);
                const y = Math.max(Math.min(event.clientY - OFFSET, 415), 65);
                return { x, y}
              })
              .subscribe(circle => this.circles = [...this.circles, circle]);
  }

}
