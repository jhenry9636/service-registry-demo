import React, { Component } from 'react';
import {AgGridReact} from 'ag-grid-react';
import './App.css';
import Header from './header.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columnDefs : [
        {headerName: "Name", field: "name", width: 150}
      ],
      rowData:  [
        {name: "Jarrad"}
      ]
    };
  }

  render() {
    return (
      <div className="ag-fresh" style={{height: 100}}>
        <Header />
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData} />
      </div>
    )
  }

}


export default App;
