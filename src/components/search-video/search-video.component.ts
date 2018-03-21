import {
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter
} from '@angular/core';
import { Video } from '../../models/video';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'sqts-search-video',
  templateUrl: './search-video.component.html',
  styleUrls: ['./search-video.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchVideoComponent implements OnInit {
  public searchText: string;

  @Output() fetchVideos: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.searchText = '';
  }

  ngOnInit() {}

  onInputChange() {
    this.fetchVideos.emit(this.searchText);
  }
}
