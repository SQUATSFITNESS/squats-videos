import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {Video} from '../../models/video';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'sqts-search-video',
  templateUrl: './search-video.component.html',
  styleUrls: ['./search-video.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchVideoComponent implements OnInit {
  public searchText: string;

  @Input()
  public filterVideos;

  constructor() {
    this.searchText = '';
  }

  ngOnInit() {
  }

  onInputChange() {
    if(this.filterVideos) {
      this.filterVideos(this.searchText);
    }
  }
}
