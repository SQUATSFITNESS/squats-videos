import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { Video } from '../models/video';
import data from '../data/videos';

@Injectable()
export class VideoService {

  constructor() { }

  public getAllVideos(pageSize: number): Video[] {
    return data.map(v => new Video(v));
  }

  public searchVideos(searchText: string, pageSize: number): Video[] {
    return data.filter(v => v.description.toLowerCase().indexOf(searchText.toLowerCase()) !== -1).map(v => new Video(v));
  }
}
