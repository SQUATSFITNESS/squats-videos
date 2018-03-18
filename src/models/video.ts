
export class Video {
  public _id: string;
  public description: string;
  public url: number;

  constructor(video: any) {
    this.description = video.description;
    this.url = video.url;
  }
}
