import { Component, Input, OnInit } from '@angular/core';
import { Paragraph } from 'src/resources/types';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {
  @Input()
  paragraph?:Paragraph;

  constructor() { }

  ngOnInit(): void {
  }
}
