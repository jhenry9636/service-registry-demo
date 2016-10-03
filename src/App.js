import React, { Component } from 'react';

import {AgGridReact} from 'ag-grid-react';
import './App.css';
import Header from './header.js';
import $ from "jquery";



class App extends Component {

  constructor(props) {
    super(props);


    var searchResult = [{"environmentTypes":"prod","id":"54a57c01-2d55-4dce-a8d2-d655380770d5","name":"AddressValidationService:1.0.0","tags":"b2b"},{"environmentTypes":"prod","id":"2e9ac434-b299-4000-8aac-28e0934defbc","name":"AdServer","tags":"b2e"},{"environmentTypes":"prod","id":"d7f77597-d458-4d16-a4aa-500ef99ec758","name":"Agnes:1.0.0","tags":"b2b"},{"environmentTypes":"prod","id":"3c8ce767-c33c-4dba-bdba-ccb00197d277","name":"asda-gm-fe","tags":"b2c"},{"environmentTypes":"prod","id":"de3e45f5-e384-4ab7-96b2-9d1927ec4208","name":"assetsetup-sitefacing:0.0.1","tags":"b2b"},{"environmentTypes":"prod","id":"e645c6f3-da5c-4416-b57f-3214b7f41d68","name":"assetsetup-sitefacing:0.0.2","tags":"b2b"},{"environmentTypes":"prod","id":"22c06689-ff09-445a-8325-243bbb5e3d26","name":"athena:1.0.0","tags":"b2b"},{"environmentTypes":"prod","id":"b6e2136c-fde0-434e-a60b-2ac6dbb2d183","name":"atlas-lists-app","tags":"b2e"},{"environmentTypes":"dev","id":"f277b53a-fab2-475f-aa54-db1ac07605ca","name":"AtlasAccount","tags":"b2c"},{"environmentTypes":"prod","id":"24cdb4f5-2ea0-43e9-ac57-e2f511736a4b","name":"baas:1.2.3","tags":"b2b"},
    {"environmentTypes":"prod","id":"54a57c01-2d55-4dce-a8d2-d655380770d5","name":"AddressValidationService:1.0.0","tags":"b2b"},{"environmentTypes":"prod","id":"2e9ac434-b299-4000-8aac-28e0934defbc","name":"AdServer","tags":"b2e"},{"environmentTypes":"prod","id":"d7f77597-d458-4d16-a4aa-500ef99ec758","name":"Agnes:1.0.0","tags":"b2b"},{"environmentTypes":"prod","id":"3c8ce767-c33c-4dba-bdba-ccb00197d277","name":"asda-gm-fe","tags":"b2c"},{"environmentTypes":"prod","id":"de3e45f5-e384-4ab7-96b2-9d1927ec4208","name":"assetsetup-sitefacing:0.0.1","tags":"b2b"},{"environmentTypes":"prod","id":"e645c6f3-da5c-4416-b57f-3214b7f41d68","name":"assetsetup-sitefacing:0.0.2","tags":"b2b"},{"environmentTypes":"prod","id":"22c06689-ff09-445a-8325-243bbb5e3d26","name":"athena:1.0.0","tags":"b2b"},{"environmentTypes":"prod","id":"b6e2136c-fde0-434e-a60b-2ac6dbb2d183","name":"atlas-lists-app","tags":"b2e"},{"environmentTypes":"dev","id":"f277b53a-fab2-475f-aa54-db1ac07605ca","name":"AtlasAccount","tags":"b2c"},{"environmentTypes":"prod","id":"24cdb4f5-2ea0-43e9-ac57-e2f511736a4b","name":"baas:1.2.3","tags":"b2b"}, {"environmentTypes":"prod","id":"54a57c01-2d55-4dce-a8d2-d655380770d5","name":"AddressValidationService:1.0.0","tags":"b2b"},{"environmentTypes":"prod","id":"2e9ac434-b299-4000-8aac-28e0934defbc","name":"AdServer","tags":"b2e"},{"environmentTypes":"prod","id":"d7f77597-d458-4d16-a4aa-500ef99ec758","name":"Agnes:1.0.0","tags":"b2b"},{"environmentTypes":"prod","id":"3c8ce767-c33c-4dba-bdba-ccb00197d277","name":"asda-gm-fe","tags":"b2c"},{"environmentTypes":"prod","id":"de3e45f5-e384-4ab7-96b2-9d1927ec4208","name":"assetsetup-sitefacing:0.0.1","tags":"b2b"},{"environmentTypes":"prod","id":"e645c6f3-da5c-4416-b57f-3214b7f41d68","name":"assetsetup-sitefacing:0.0.2","tags":"b2b"},{"environmentTypes":"prod","id":"22c06689-ff09-445a-8325-243bbb5e3d26","name":"athena:1.0.0","tags":"b2b"},{"environmentTypes":"prod","id":"b6e2136c-fde0-434e-a60b-2ac6dbb2d183","name":"atlas-lists-app","tags":"b2e"},{"environmentTypes":"dev","id":"f277b53a-fab2-475f-aa54-db1ac07605ca","name":"AtlasAccount","tags":"b2c"},{"environmentTypes":"prod","id":"24cdb4f5-2ea0-43e9-ac57-e2f511736a4b","name":"baas:1.2.3","tags":"b2b"},
    {"environmentTypes":"prod","id":"54a57c01-2d55-4dce-a8d2-d655380770d5","name":"AddressValidationService:1.0.0","tags":"b2b"},{"environmentTypes":"prod","id":"2e9ac434-b299-4000-8aac-28e0934defbc","name":"AdServer","tags":"b2e"},{"environmentTypes":"prod","id":"d7f77597-d458-4d16-a4aa-500ef99ec758","name":"Agnes:1.0.0","tags":"b2b"},{"environmentTypes":"prod","id":"3c8ce767-c33c-4dba-bdba-ccb00197d277","name":"asda-gm-fe","tags":"b2c"},{"environmentTypes":"prod","id":"de3e45f5-e384-4ab7-96b2-9d1927ec4208","name":"assetsetup-sitefacing:0.0.1","tags":"b2b"},{"environmentTypes":"prod","id":"e645c6f3-da5c-4416-b57f-3214b7f41d68","name":"assetsetup-sitefacing:0.0.2","tags":"b2b"},{"environmentTypes":"prod","id":"22c06689-ff09-445a-8325-243bbb5e3d26","name":"athena:1.0.0","tags":"b2b"},{"environmentTypes":"prod","id":"b6e2136c-fde0-434e-a60b-2ac6dbb2d183","name":"atlas-lists-app","tags":"b2e"},{"environmentTypes":"dev","id":"f277b53a-fab2-475f-aa54-db1ac07605ca","name":"AtlasAccount","tags":"b2c"},{"environmentTypes":"prod","id":"24cdb4f5-2ea0-43e9-ac57-e2f511736a4b","name":"baas:1.2.3","tags":"b2b"}]


    function prodCell(params) {
        return '<span class="tag-item">' + params.value.toUpperCase() + '</span>';
    }

    function linkCell(params) {
        return '<a class="name-link" href="#">' + params.value.toUpperCase() + '</a>';
    }


    $.ajax({
      type: "GET",
      contentType: "application/json",
      url: '/registry/rs/ga/v2/ui/search/application',
      complete: function(data) {
        console.log(data)
      }
   });


    this.state = {
      currentView : 'app',
      columnDefs : [
        {headerName: "Name", field: "name", width:500, cellRenderer: linkCell},
        {headerName: "Environment Type", field: "environmentTypes", width: 300, cellClass: "type-cell", cellRenderer: prodCell},
        {headerName: "Tags", field: "tags", width: 350, cellClass: "tag-name", cellRenderer: prodCell}],
      rowData: searchResult,
        enableSorting: true,
        enableFilter: true,
        rowHeight: 40

    };
  }

  render() {
    return (
      <div className="ag-fresh" style={{height: "400px"}}>
        <Header />
        <h1 className="mainTitle">Application<a href="#">+</a></h1>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          enableSorting={this.state.enableSorting}
          enableFilter={this.state.enableFilter}
          showToolPanel={true} 
          style={{width: "200px"}}
          rowHeight={this.state.rowHeight} 
          />
      </div>
    )
  }

}


export default App;
