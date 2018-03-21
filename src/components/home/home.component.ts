import { Component, OnInit } from "@angular/core";
import { Video } from "../../models/video";
import { VideoService } from "../../services/video.service";

@Component({
  selector: "sqts-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public videos: Video[];
  private pageSize: number;

  constructor(private videoService: VideoService) {
    this.pageSize = 100;
  }

  ngOnInit() {
    this.videos = this.videoService.getAllVideos(this.pageSize);
  }

  fetchVideosList(searchText: string) {
    if (searchText === "") {
      this.videos = this.videoService.getAllVideos(this.pageSize);
    } else {
      this.videos = this.videoService.searchVideos(searchText, this.pageSize);
    }
  }
}
