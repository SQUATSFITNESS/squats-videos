import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../../models/video';

@Component({
  selector: 'sqts-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() public video: Video;

  ngOnInit() {}
}
