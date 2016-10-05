import React, { Component } from 'react';

import {AgGridReact} from 'ag-grid-react';
import './App.css';
import Header from './header.js';
import $ from "jquery";


class App extends Component {

  constructor(props) {
    super(props);

    var component = this;
  }

  render() {
    return (
      <div className="ag-fresh" style={{height: "400px"}}>
        <Header active={this.state.currentView} />
        <h1 className="mainTitle">Applications<a href="#">+</a></h1>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          enableSorting={this.state.enableSorting}
          enableFilter={this.state.enableFilter}
          style={{width: "200px"}}
          rowHeight={this.state.rowHeight} />
      </div>
    )
  }

}


export default App;
