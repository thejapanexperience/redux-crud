import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import moment from 'moment';
import * as ChildActions from '../actions/ChildActions';

class Children extends Component {
  render() {
    const { children, sorting, searching, addChild, loseChild, editChild1, editChild2, sortName, sortAdded, search } = this.props;

    let sorted = [];
    if (sorting === 'added') {
      sorted = children.sort((a, b) => {
        if (a.time > b.time) {
          return 1;
        }
        if (a.time < b.time) {
          return -1;
        }
        return 0;
      });
    }
    if (sorting === 'name') {
      sorted = children.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    }

    return (
      <div>
        <button onClick={() => addChild(this.refs.childName.value)}>+</button>
        <input ref="childName" type="text" defaultValue="Elia" />
        <button onClick={() => sortName()}>Sort by Name</button>
        <button onClick={() => sortAdded()}>Sort by Added Order</button>
        <input ref="search" type="text" defaultValue="" onKeyUp={() => search(this.refs.search.value)} />
        <span>Search</span>
        <table className="table">
          <thead>
            <tr>
              <th>Child Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              sorted.map((child) => {
                if (child.editable && child.name.startsWith(searching)) {
                  return (
                    <tr key={child.id}>
                      <td><input ref="editName" type="text" defaultValue={child.name} /></td>
                      <td><button onClick={() => editChild2(child, this.refs.editName.value)} className="btn">Submit</button></td>
                    </tr>
                  );
                } else if (!child.editable && child.name.startsWith(searching)) {
                  return (
                    <tr key={child.id}>
                      <td>{child.name}</td>
                      <td><button onClick={() => editChild1(child)} className="btn">Edit</button></td>
                      <td><button onClick={() => loseChild(child)} className="btn">Delete</button></td>
                    </tr>
                  ); }
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  children: state.children,
  sorting: state.sorting,
  searching: state.searching,
});

const mapDispatchToProps = dispatch => ({
  addChild(name) {
    dispatch(ChildActions.addChild({
      name,
      id: uuid(),
      editable: false,
      time: moment().format('x'),
    }));
  },
  editChild1(child) {
    child.editable = true;
    dispatch(ChildActions.editChild(child));
  },
  editChild2(child, newName) {
    child.name = newName;
    child.editable = false;
    dispatch(ChildActions.editChild(child));
  },
  loseChild(child) {
    dispatch(ChildActions.loseChild(child));
  },
  sortName() {
    dispatch(ChildActions.sortName());
  },
  sortAdded() {
    dispatch(ChildActions.sortAdded());
  },
  search(str) {
    dispatch(ChildActions.search(str));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Children);
