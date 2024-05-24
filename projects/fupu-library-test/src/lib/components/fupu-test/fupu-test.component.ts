import { Component, Input, OnInit } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { LogService } from '../../services/log.service';
import { FupuTestService } from '../../services/fupu-test.service';

@Component({
  selector: 'lib-fupu-test',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './fupu-test.component.html',
  styleUrl: './fupu-test.component.css'
})
export class FupuTestComponent implements OnInit {
  @Input() title: string = '';
  @Input() value: number = 0;

  constructor(private log: LogService, public fupuService: FupuTestService) {}

  ngOnInit(): void {
    this.log.logMsg("FupuTestComponent", "INIT");
  }
}
