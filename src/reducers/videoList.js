import Redux from 'redux';

const CHANGE_VIDEO_LIST = 'CHANGE_VIDEO_LIST';

var videoListReducer = (state = [], action) => {
  switch (action.type) {
  case CHANGE_VIDEO_LIST:
    return action.videos;
  default:
    return state;
  }
};

export default videoListReducer;
