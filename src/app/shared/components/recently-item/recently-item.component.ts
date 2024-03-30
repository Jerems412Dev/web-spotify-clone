import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recently-item',
  templateUrl: './recently-item.component.html',
  styleUrls: ['./recently-item.component.css'],
  standalone: true
})
export class RecentlyItemComponent implements OnInit {
  @ViewChild('playButtonRecently') playButtonRecently: ElementRef | undefined;
  @Input() imgLink: string | undefined;

  constructor() { }

  onMouseEnterR() {
    if(this.playButtonRecently?.nativeElement) {
      this.playButtonRecently.nativeElement.style.opacity = "1";
    }
  }

  onMouseLeaveR() {
    if(this.playButtonRecently?.nativeElement) {
      this.playButtonRecently.nativeElement.style.opacity = "0";
    }
  }

  ngOnInit() {
  }

}
