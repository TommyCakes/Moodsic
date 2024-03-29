const userStyle = {
    margin:10,   
    display: 'flex',
    fontFamily: 'helvetica',
    fontWeight: 100
}

const userInfoStyle = {
    margin:10
}

const avatarStyle = {
    borderRadius: '50%',
    width:90
}

const profileStyle = {
    display:"inline-block",
    marginLeft: 20,
    verticalAlign: 'top',
}

const buttonStyle = {
    backgroundColor: 'transparent',
    border: '1px solid lightblue',
    color: 'lightblue',
    padding:6,
    borderRadius:6,
    width:110
}

function getCurrentUser() {
    return {
        avatarUrl : 'https://placekitten.com/g/90/90',
        name: "TommyCakes",
        status: "Preminum"
    }
}

function Avatar(props) {
    return (
        <img className="Avatar" style={avatarStyle}
            src={props.user.avatarUrl}
            alt={props.user.name}
          />
    )
}

function UserInfo(props) {
    return (
        <div className="UserInfo" style={userInfoStyle}>
            <Avatar user={props.user}/>

            <div className="UserInfo" style={profileStyle}>
            <p>{props.user.name}</p>
            <button style={buttonStyle}>{props.user.status}</button>
          </div>        

        </div>
    );
}

function User(props) {
    return (
      <div className="User" style={userStyle}>               
        <UserInfo user={props.user}/>      
      </div>
    );
  }

  const Profile = () => (
      <div>
        <User
            user={getCurrentUser()}
        />
      </div>
  )

  export default Profile