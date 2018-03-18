import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { Video } from '../models/video';

@Injectable()
export class VideoService {

  constructor() { }

  public getAllVideos(pageSize: number): Video[] {
    return [
      new Video({
        description: 'Circadian Rhythm, REM, T/C ratio',
        url: 'https://www.facebook.com/jitendra.chouksey.7/videos/1366255526720868/'
      })];
  }

  public searchVideos(searchText: string, pageSize: number): Video[] {
    return [
      new Video({
        description: 'Circadian Rhythm, REM, T/C ratio',
        url: 'https://www.facebook.com/jitendra.chouksey.7/videos/1366255526720868/'
      })
    ];
  }
}
