import React, {Component} from 'react'

class Form extends Component {
    state = { userName:''}
    handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state.userName)
    }
    render() {
        return (
            <form actionReact ="" onSubmit={this.handleSubmit}>
                <input type='text' 
                value={this.state.userName}
                onChange={event=> this.setState({userName: event.target.value})}
                placeholder='Please enter your name' />
                <button >Save Profile</button>
            </form>
        )
    }
}
export default Form;
