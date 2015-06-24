var React = require('react');

var Input = React.createClass({
	getInput: function(event) {
		this.setState({
			message: event.target.value
		});
	},
	handleClick: function(e) {
		e.preventDefault();
		this.props.socket.emit('message', this.state.message);
	},
	render: function() {
		return (
			<form className="form-group" onSubmit={ this.handleClick }>
				<div className="input-group">
					<input className="form-control" type="text" onChange={ this.getInput } />
					<span className="input-group-btn">
						<button className="btn btn-default" type="button" onClick={ this.handleClick }>
							Search
						</button>
					</span>
				</div>
			</form>
		);
	}
});

module.exports = Input;