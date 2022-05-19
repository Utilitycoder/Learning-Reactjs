import {React, Component} from 'react'
import Header from './Header'
import  {UserContextConsumer} from './userContext'

class App extends Component {
  state = {
    NewUserName: ""
  }

  handleChange = (e) => {
    const {name, value } = e.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        <Header /> 
        <UserContextConsumer>
          {({userName, changeUserName}) => (
            <main>
              <p className='main'> No new notifications, {userName}! 🎉</p>
              <input 
                type="text"
                name="NewUserName"
                placeholder='New Username'
                value={this.state.NewUserName}
                onChange={this.handleChange}
              />
              <button onClick={() => changeUserName(this.state.NewUserName)}>Change Username</button>
            </main>
          )}
        </UserContextConsumer>
      </div>
    )
  }
}

export default App;
