let CHANGE_VIDEO = 'CHANGE_VIDEO';

var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  type: CHANGE_VIDEO,
  video: video
});

export default changeVideo;
