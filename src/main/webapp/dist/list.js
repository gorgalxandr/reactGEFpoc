webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	'use strict';
	var Layout = __webpack_require__(2);
	var Table = __webpack_require__(3);
	var AppStore = __webpack_require__(1);
	var Button = __webpack_require__(7);

	var React = __webpack_require__(10);


	var List = React.createClass({


	    displayName: "List of partners view",

	    componentWillMount: function () {
	        this.setState({partnersListData: AppStore.getElementValue("partnerList")});
	    },

	    render: function () {

	        var tableHeaders = {
	            name: 'Name', birthNr: "Birth number"
	        };
	        var actions = [{name: 'Edit', link: ''}, {name: 'View', link: '/view'}];
	        return (
	            React.createElement(Layout, {title: "Partners list"}, 
	                React.createElement(Button, {href: "/new"}, "New"), 
	                React.createElement(Table, {headers: tableHeaders, data: this.state.partnersListData, rowIdProperty: "id", actions: actions, id: "partnersTable"})
	            )
	        );
	    }
	});

	React.render(React.createElement(List, null), document.getElementById('app'));

/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	'use strict';
	var BTable = __webpack_require__(12);
	var React = __webpack_require__(10);
	var Button = __webpack_require__(7);
	__webpack_require__(30);

	var TableRow = React.createClass({displayName: "TableRow",
	    // columns, data
	    propTypes: {
	        columnNames: React.PropTypes.array.isRequired,
	        data: React.PropTypes.object.isRequired,
	        actions: React.PropTypes.array,
	        rowId: React.PropTypes.string.isRequired
	    },
	    render: function () {
	        var tds = [];
	        var acs = [];
	        var data = this.props.data;
	        var columnNames = this.props.columnNames;
	        var actions = this.props.actions;
	        for (var i = 0; i < columnNames.length; i++) {
	            tds.push(React.createElement("td", null, data[columnNames[i]]));
	        }
	        ;

	        if (actions !== undefined) {
	            for (var j = 0; j < actions.length; j++) {
	                var link = actions[j].link + "/" + data[this.props.rowId];
	                acs.push(React.createElement("span", null, 
	                    React.createElement(Button, {bsStyle: "primary", href: link}, actions[j].name), 
	                " "));
	            }
	        }
	        if (acs.length > 0) {
	            tds.push(React.createElement("td", null, acs));
	        }
	        return (
	            React.createElement("tr", {id: data[this.props.rowId]}, tds)
	        );
	    }
	});

	var TableHeader = React.createClass({displayName: "TableHeader",

	    render: function () {
	        var headers = this.props.columns;
	        var keys = Object.keys(this.props.columns);
	        var ths = [];
	        for (var i = 0; i < keys.length; i++) {
	            ths.push(React.createElement("th", null, headers[keys[i]]));
	        }
	        if (this.props.actions !== undefined) {
	            ths.push(React.createElement("th", null, "Actions"));
	        }
	        return (React.createElement("tr", null, ths));
	    }
	});

	var Table = React.createClass({displayName: "Table",
	    propTypes: {
	        id: React.PropTypes.string.isRequired,
	        headers: React.PropTypes.object.isRequired,
	        data: React.PropTypes.array.isRequired,
	        rowIdProperty: React.PropTypes.string.isRequired
	    },

	    render: function () {

	        var tableData = this.props.data;
	        var tableRows = [];

	        for (var i = 0; i < tableData.length; i++) {
	            tableRows.push(React.createElement(TableRow, {columnNames: Object.keys(this.props.headers), rowId: this.props.rowIdProperty, data: tableData[i], actions: this.props.actions}));
	        }

	        var tableHeader = React.createElement(TableHeader, {columns: this.props.headers, actions: this.props.actions !== undefined});

	        return (React.createElement(BTable, {stripped: true, bordered: true, hover: true, id: this.props.id}, 
	        tableHeader, 
	        tableRows
	        ));
	    }
	});
	module.exports = Table;

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(10);
	var joinClasses = __webpack_require__(34);
	var classSet = __webpack_require__(35);

	var Table = React.createClass({displayName: 'Table',
	  propTypes: {
	    striped: React.PropTypes.bool,
	    bordered: React.PropTypes.bool,
	    condensed: React.PropTypes.bool,
	    hover: React.PropTypes.bool,
	    responsive: React.PropTypes.bool
	  },

	  render: function () {
	    var classes = {
	      'table': true,
	      'table-striped': this.props.striped,
	      'table-bordered': this.props.bordered,
	      'table-condensed': this.props.condensed,
	      'table-hover': this.props.hover
	    };
	    var table = (
	      React.createElement("table", React.__spread({},  this.props, {className: joinClasses(this.props.className, classSet(classes))}), 
	        this.props.children
	      )
	    );

	    return this.props.responsive ? (
	      React.createElement("div", {className: "table-responsive"}, 
	        table
	      )
	    ) : table;
	  }
	});

	module.exports = Table;

/***/ },

/***/ 30:
27

});