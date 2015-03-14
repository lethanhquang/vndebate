'use strict';

// lib
let _               = require('lodash');
let React           = require('react');
let {Table, Column} = require('fixed-data-table');

// components
let UsersFixedTableDivImage = require('./users-fixed-table-div-image');

// render image cell
let renderImageCell = function (/*string*/ cellData) {
  return <UsersFixedTableDivImage src={cellData} />;
};

// render link name cell
let renderLinkName = function (/*string*/ cellData, cellDataKey, rowData) {
  return <a href={rowData.url}>{cellData}</a>;
};

// render gender cell
let renderGenderCell = function (/*string*/ cellData) {
  switch(cellData) {
    case 'male':
      return <i className='fa fa-mars color-blue' />;
    case 'female':
      return <i className='fa fa-venus color-purple' />;
  };
};

// component
let UsersFixedTable  = React.createClass({
  mixins: [React.addons.PuredRenderMixin],

  componentWillMount() {
    this.props.data = JSON.parse(this.props.data);
  },
  rowGetter(rowIndex) {
    return this.props.data[rowIndex];
  },
  render() {
    return (
      <Table
        rowHeight={50}
        rowGetter={this.rowGetter}
        rowsCount={this.props.data.length}
        width={this.props.tableWidth}
        height={this.props.tableHeight}
        headerHeight={50}>
        <Column label="" width={50} dataKey='avatar' fixed={true} cellRenderer={renderImageCell} />
        <Column label="Name" width={200} dataKey='name' fixed={true} cellRenderer={renderLinkName} />
        <Column label="Email" width={250} dataKey='email' />
      </Table>
    );
  }
})

module.exports = window.UsersFixedTable = UsersFixedTable;
