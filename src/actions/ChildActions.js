export function addChild(child) {
  return {
    type: 'ADD_CHILD',
    payload: child,
  };
}

export function editChild(child) {
  return {
    type: 'EDIT',
    payload: child,
  };
}

export function loseChild(child) {
  return {
    type: 'LOSE_CHILD',
    payload: child,
  };
}

export function sortName() {
  return {
    type: 'BY_NAME',
  };
}

export function sortAdded() {
  return {
    type: 'BY_ADDED',
  };
}

export function search(str) {
  return {
    type: 'SEARCH',
    payload: str,
  };
}
