import { Component } from 'react'

class formRenderProps extends Component {

    constructor(props) {
        super(props);
        var { fields } = this.props;
        this.state = fields.reduce(function (acc, val) {
            return { ...acc, [val.id]: '' };
        }, {});

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        var { render } = this.props;
        var { state, handleChange } = this;
        return render(state, handleChange);
    }
}

export default formRenderProps
