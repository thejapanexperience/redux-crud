export default function (state = '', action) {
  switch (action.type) {
    case 'SEARCH':
      console.log('action.payload: ', action.payload);
      return action.payload;
    default:
      return state;
  }
}
