
export class Video {
  public _id: string;
  public description: string;
  public url: string;
  public postedBy: string;
  public date: string;

  constructor(video: any) {
    this.description = video.description;
    this.url = video.url;
    this.postedBy = video.postedBy;
    this.date = video.date;
  }
}
