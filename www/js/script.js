var React = require('react');
var socket = io();

var MainBody = require('MainBody');

React.render(<MainBody socket={socket}/>,
	document.getElementById('Main')
);