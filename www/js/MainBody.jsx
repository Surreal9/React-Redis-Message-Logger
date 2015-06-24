var React = require('react');
var MessageLog = require('MessageLog');

var Input = require ('Input');

var MainBody = React.createClass({
	render: function() {
		return (
			<div className="col-sm-6 col-sm-offset-3 top-buffer-2">
				<Input socket={this.props.socket}/>
				<ul className="list-group">
					<MessageLog socket={this.props.socket}/>
				</ul>
			</div>
		);
	}
});

module.exports = MainBody;