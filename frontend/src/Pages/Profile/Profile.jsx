import { useEffect, useState } from "react";
import "./Profile.css"

function Profile() {

    const [user, setUser] = useState(null);

    useEffect(() => {

        const storedUser1 = localStorage.getItem("user");

        if (storedUser1) {
            try {
                setUser(JSON.parse(storedUser1));
                // console.log(storedUser1);
            }
            catch (err) {
                console.log("Invalid user data");
                setUser(null);
            }
        }
        else {
            setUser(null);
        }
    }, []);


    return (

        <div className="profile">
            <div className="profile-2">
                <ul className="profile-items">
                    Personal Information
                    <li className="list-items">
                        <div>
                        Name
                        </div>
                        <input className="userdata-field" type="text" value={user?.name} readOnly />
                    </li>


                    <li className="list-items">
                        <div>
                            Email Address
                        </div>
                        <input className="userdata-field" type="text" value={user?.email} readOnly />
                    </li>


                    <li className="list-items">Your Gender
                        <div className="genderdata-field">
                            <div className="d">
                            <input type="radio" className="gender-btn" />
                            Male
                            </div> 
                        
                            <div className="d">
                            <input type="radio" className="gender-btn"
                             /> 
                                Female
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="delete-btn">
                    <span>Delete Account</span>
                </div>
            </div>
        </div>
    )

}

export default Profile;