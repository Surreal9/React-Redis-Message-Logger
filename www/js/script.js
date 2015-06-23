var socket = io();

var Input = React.createClass({
	getInput: function(event) {
		this.setState({
			message: event.target.value
		});
	},
	handleClick: function(e) {
		e.preventDefault();
		socket.emit('message', this.state.message);
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

var MessageLog = React.createClass({
    getInitialState: function() {
        return { response: '' };
    },
    componentDidMount: function() {
    	var self = this;
        socket.on('messageLog', function(data) {
            self.setState({
                response: data
            });
        });
    },
    render: function() {
        return (
            <li className="list-group-item">{ this.state.response }</li>
        );
    }
});

var MainBody = React.createClass({
	render: function() {
		return (
			<div className="col-sm-6 col-sm-offset-3 top-buffer-2">
				<Input />
				<ul className="list-group">
					<MessageLog />
				</ul>
			</div>
		);
	}
});

React.render(<MainBody />,
	document.getElementById('Main')
);