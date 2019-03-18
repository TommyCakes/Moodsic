import Padding from '../components/Padding'
import Header from '../components/Header'
import fetch from 'isomorphic-unfetch'

const layoutStyle = {
    background:'#191927',
    height: 1000,
    color: 'white',
}

const Profile = (props) => (
  <div style={layoutStyle}>
        <Header/>
        <Padding></Padding>
        <h1>Welcome, {props.user}</h1>
        {console.log(props.user)}
        <p>This is your profile...</p>
        <Padding/>
        <form action="http://localhost:3003/user/edit" method="post">
            Upload new profile?
        <input type="file" name="fileToUpload" id="fileToUpload"/>
        <input type="submit" value="Upload Image" name="submit"/>
        </form>
  </div>
)

Profile.getInitialProps = async function() {
    const res = await fetch('http://localhost:3003/user/1')
    const data = await res.json()

    return {
        user: data
    } 
}
export default Profile