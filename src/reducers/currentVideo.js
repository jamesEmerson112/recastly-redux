import Redux from 'redux';

const CHANGE_VIDEO_LIST = 'CHANGE_VIDEO_LIST';

var currentVideoReducer = (state = [], action) => {
  switch (action.type) {
  // case 'CHANGE_VIDEO':
  // return action.video || null;
  case CHANGE_VIDEO_LIST:
    return action.video || [];
    break;
  default:
    return state;
  }
};

export default currentVideoReducer;
