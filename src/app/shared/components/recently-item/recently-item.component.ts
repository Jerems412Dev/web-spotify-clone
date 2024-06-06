import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Track } from '../../models/Track';
import { DataService } from '../../services/Data.service';

@Component({
  selector: 'app-recently-item',
  templateUrl: './recently-item.component.html',
  styleUrls: ['./recently-item.component.css'],
  standalone: true
})
export class RecentlyItemComponent implements OnInit {
  @ViewChild('playButtonRecently') playButtonRecently: ElementRef | undefined;
  @Input() imgLink: string | undefined;
  @Input("track") track: Track | undefined;

  constructor(private data: DataService) { }

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

  stopEventSvg() {
    if(this.track) {
      this.data.setTrackSelect(this.track);
    }
  }

  ngOnInit() {
  }

}
