import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { Video } from '../models/video';
import data from '../data/videos';

@Injectable()
export class VideoService {

  constructor() { }

  public getAllVideos(pageSize: number): Video[] {
    return data
      .sort((a, b) => { return a.date < b.date ? 1 : -1})
      .map(v => new Video(v));
  }

  public searchVideos(searchText: string, pageSize: number): Video[] {
    const search = searchText.toLowerCase();
    return data.filter(v =>
      v.description.toLowerCase().indexOf(search) !== -1 ||
      v.url.toLowerCase().indexOf(search) !== -1 ||
      v.postedBy.toLowerCase().indexOf(search) !== -1 ||
      v.date.toLowerCase().indexOf(search) !== -1
    )
      .sort((a, b) => { return a.date < b.date ? 1 : -1})
      .map(v => new Video(v));
  }
}
