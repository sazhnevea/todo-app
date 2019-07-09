import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  onClick = (evt) => {
    evt.preventDefault();
   this.props.onFilterChange(evt.target.textContent.toLowerCase())
  }

  render() {
    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-info"
                onClick={this.onClick}>All</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={this.onClick}>Active</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={this.onClick}>Done</button>
      </div>
    );
  };
}
