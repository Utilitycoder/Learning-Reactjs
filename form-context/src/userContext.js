import { createContext, Component } from 'react'

const { Provider, Consumer } = createContext()

class UserContextProvider extends Component {
    state = {
        username: "bob123"
    }

    changeUserName = (username) => {
        this.setState({username})
    }

    render() {
        const {username} = this.state

        return (
            <Provider value={{username, changeUserName: this.changeUserName}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UserContextProvider, Consumer as UserContextConsumer}