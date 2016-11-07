export default function (state = 'added', action) {
  switch (action.type) {
    case 'BY_NAME':
      console.log('in sorting.js');
      return 'name';
    case 'BY_ADDED':
      console.log('in sorting.js');
      return 'added';
    default:
      return state;
  }
}
