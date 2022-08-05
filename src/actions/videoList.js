let CHANGE_VIDEO_LIST = 'CHANGE_VIDEO_LIST';

var changeVideoList = (videos) => ({
  type: CHANGE_VIDEO_LIST,
  videos: videos
});

export default changeVideoList;
