import {UserContextConsumer} from "./userContext"

export default function Header(props) {
    return (
        <header>
            <UserContextConsumer>
                {
                    ({username}) => (
                        <p>Welcome, {username}!</p>
                    )
                }
            </UserContextConsumer>
        </header>
    )
}