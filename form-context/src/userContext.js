import { createContext } from 'react'

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
        const {changeUserName} = this.changeUserName

        return (
            <Provider value={{username, changeUserName}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UserContextProvider, Consumer as UserContextConsumer}