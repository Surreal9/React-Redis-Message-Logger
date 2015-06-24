var React = require('react');

var MessageLog = React.createClass({
    getInitialState: function() {
        return { response: '' };
    },
    componentDidMount: function() {
        this.props.socket.on('messageLog', data => {
            this.setState({
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

module.exports = MessageLog;