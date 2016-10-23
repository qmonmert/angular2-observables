import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.css']
})
export class Demo5Component implements OnInit {

  @ViewChild('ball') ball;

  position: any;

  ngOnInit() {
    const OFFSET_X = 50;
    const OFFSET_Y = 100;
    
    const move$ = Observable
                  .fromEvent(document, 'mousemove')
                  .map((event: MouseEvent) => {
                    let mouseX = event.pageX - OFFSET_X;
                    if (mouseX > 320) {
                      mouseX = 320;
                    } else if (mouseX < 0) {
                      mouseX = 0;
                    }
                    let mouseY = event.pageY - OFFSET_Y;
                    if (mouseY > 320) {
                      mouseY = 320;
                    } else if (mouseY < 0) {
                      mouseY = 0;
                    }
                    return { x: mouseX, y: mouseY};
                  });

    const down$ = Observable.fromEvent(this.ball.nativeElement, 'mousedown');
    const up$ = Observable.fromEvent(document, 'mouseup');

    down$
      .switchMap(event => move$.takeUntil(up$))
      .startWith({x: 160, y: 160})
      .subscribe(result => this.position = result);
  }

}
