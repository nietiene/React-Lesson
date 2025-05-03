
const Props = () => {
    const user = "Etiene";
    return <Parent user={user}/>
}

const Parent = ({ user }) => {
    return <Child user={user}/>
}

const Child = ({ user }) => {
    return <GrandChild user={user}/>
}

const GrandChild = ({ user }) => {
    return <p>Hello {user}</p>
}
