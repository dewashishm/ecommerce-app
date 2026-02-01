import "./Profile.css"

function Profile () {
    return(

        <div className="profile">
        <ul className="profile-items">
            <li>Name</li>
            <li>Email</li>
            <li>Gender</li>
        </ul>
        <div>
            <span>Delete Account</span>
        </div>
        </div>
    )
    
}

export default Profile;