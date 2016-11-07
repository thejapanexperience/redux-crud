export default function (state = [], action) {
  switch (action.type) {

    case 'ADD_CHILD':
      return [...state, action.payload];

    case 'EDIT':
      const child = action.payload;
      const childId = child.id;
      const index = state.findIndex(kid =>
         kid.id === childId
      );
      return state.map((kid, i) => {
        if (i === index) {
          return child;
        } else {
          kid.editable = false;
          return kid;
        }
      });

    case 'LOSE_CHILD':
      const del = state.slice(0);
      const lostchild = action.payload;
      const lostchildId = lostchild.id;
      const lostindex = state.findIndex(kid =>
         kid.id === lostchildId
      );
      del.splice(lostindex, 1);
      return del;

    default:
      return state;
  }
}
