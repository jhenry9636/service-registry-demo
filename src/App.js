import React, { Component } from 'react';

import {AgGridReact} from 'ag-grid-react';
import './App.css';
import Header from './header.js';
import $ from "jquery";


class App extends Component {

  constructor(props) {
    super(props);


    function prodCell(params) {
        return '<span class="tag-item">' + params.value.toUpperCase() + '</span>';
    }

    function linkCell(params) {
        return '<a class="name-link" href="#">' + params.value.toUpperCase() + '</a>';
    }

    function tagName(params) {
        return '<span class="tag-item">' + params.value.tagName.toUpperCase() + '</span>';
    }

    var component = this;

    this.state = {
      currentView : 'app',
      columnDefs : [
        {headerName: "Name", field: "name", width:500, cellRenderer: linkCell},
        {headerName: "Environment Type", field: "environmentTypes", width: 300, cellClass: "type-cell", cellRenderer: prodCell},
        {headerName: "Tags", field: "tags", width: 350, cellClass: "tag-name", cellRenderer: tagName}],
      rowData: null,
        enableSorting: true,
        enableFilter: true,
        rowHeight: 40

    };

    $.when($.getJSON( "/registry/rs/ga/v2/ui/search/application"),
      $.getJSON( "/registry/rs/ga/v2/ui/search/application")).then(function( result1, result2 ) {
        var mergedResults = result1[0].searchResult.hits.concat(result2[0].searchResult.hits);
        component.setState({rowData: mergedResults})

        console.log('*******Merged Results********')
        console.dir(mergedResults)
    });



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
          rowHeight={this.state.rowHeight} 
          />
      </div>
    )
  }

}


export default App;
