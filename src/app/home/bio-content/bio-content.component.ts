import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface PortalSection {
  id:string;
  tileName:string;
  tileClass:string;
  contentClass:string;
  selected:boolean;
}

@Component({
  selector: 'app-bio-content',
  templateUrl: './bio-content.component.html',
  styleUrls: ['./bio-content.component.scss']
})
export class BioContentComponent implements OnInit, AfterViewInit {
  portalSections:PortalSection[];
  @ViewChild("tilesParent") tilesParent!:ElementRef;
  @ViewChild("contentParent") contentParent!:ElementRef;

  constructor() {
    this.portalSections = [
      {
        id:"section-1",
        tileName : "Test 1",
        tileClass : "Class-1",
        contentClass : "TheClass-1",
        selected:false
      },
      {
        id:"section-2",
        tileName : "Test 2",
        tileClass : "Class-2",
        contentClass : "TheClass-2",
        selected:false
      }
    ];
  }

  onTileSelected(section:PortalSection) {
    this.portalSections = this.portalSections.map( n => ({...n, selected : section.id == n.id}) );
    const currentActive = this.contentParent.nativeElement.getElementsByClassName("app-is-active");
    currentActive.removeClass("app-is-active");
    const contentElement = this.contentParent.nativeElement.getElementsByClassName(section.contentClass);
    contentElement.addClass("app-is-active");

  }

  ngAfterViewInit(): void {
    console.log(this.tilesParent);
  }

  ngOnInit(): void {
  }
}
