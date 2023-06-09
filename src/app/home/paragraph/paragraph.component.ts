import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ContentPart, Paragraph } from 'src/resources/types';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss'], 
  encapsulation: ViewEncapsulation.None
})
export class ParagraphComponent implements OnInit {
  @Input()
  paragraph?:Paragraph;

  constructor() { }

  ngOnInit(): void {
  }
}
