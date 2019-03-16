import Profile from './User'

const headerStyle = {
    height:110,
    width:'100%',
    padding:30,
    margin: "10 0 0 0",
    background:'#282837',
    color: 'white',
}


// es6 annoymous func 
const Header = () => (   
    <div style={headerStyle}>  
        <Profile/>
    </div>
)

export default Header