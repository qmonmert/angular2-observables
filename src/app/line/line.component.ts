import { Component, Input } from '@angular/core';
import { Line } from './../model/line';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent {

  @Input('line') line: any;

}
