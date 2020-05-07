import { Observable } from "rxjs";
import $ from "jquery";
import { ElementComponent } from "../../../lib/component";

export class YoutubePlayer extends ElementComponent {
  get currentTime() {
    return this._player.getCurrentTime();
  }

  constructor() {
    super("div");
  }

  _onAttach() {
    this.$element.addClass("player youtube");
  }

  init$() {
    this.$element.hide();
    const $playerElement = $(`<div />`).appendTo(this.$element);
    return new Observable(observer => {
      window.onYouTubeIframeAPIReady = () => {
        this._player = new window.YT.Player($playerElement[0],{
          width: "100%",
          height: "100%",
          videoId: "",
          playerVars: {
            autoplay: 1,
            disablekb: 1,
            enablejsapi: 1,
            modestbranding: 1,
            iv_load_policy: 3,
            rel: 0
          },
          events: {
            onReady: () => {
              observer.complete();
            }
          }
        });
      };
      $(`<script src="https://www.youtube.com/iframe_api" />`).appendTo($("body"));
    });
  }

  play(source, time) {
    this.$element.show();
    this._player.loadVideoById(source.url, time);
  }

  stop() {
    this.$element.hide();
    this._player.pauseVideo();
  }

  seek(time) {
    this._player.seekTo(time);
  }
}
