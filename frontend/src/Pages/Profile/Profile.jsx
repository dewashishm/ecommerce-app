import { useEffect, useState } from "react";
import "./Profile.css"

function Profile () {

    const [user, setUser] = useState(null);

    useEffect(()=>{

        const storedUser1 = localStorage.getItem("user");
        
        if (storedUser1) {
            try{
                setUser(JSON.parse(storedUser1));
                // console.log(storedUser1);
            }
          catch (err){
            console.log("Invalid user data");
            setUser(null);
          }
        }
          else{
            setUser(null);
          }
    }, []);

    
    return(

        <div className="profile">
        <div className="profile-2">
        <ul className="profile-items">
            Personal Information
            <li className="list-items">Name<span>
             {user?.name}
            </span>
                 </li>
            <li className="list-items">Email Address</li>
            <li className="list-items">Your Gender
                <div>
                <input type="radio" className="gender-btn"/> Male 
                <input type="radio" className="gender-btn" /> Female
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