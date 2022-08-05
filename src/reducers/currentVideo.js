import Redux from 'redux';

var currentVideoReducer = (state = [], action) => {
  switch (action.type) {
  // case 'CHANGE_VIDEO':
  // return action.video || null;
  case CHANGE_VIDEO_LIST:
    return action.videos || [];
    break;
  default:
    return state;
  }
};

export default currentVideoReducer;
