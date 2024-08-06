import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import "./Profile.css"
function Profile(){
    let [theme,setTheme]=useState({
         bgColor: "white",
         textColor:"black",
});
    let [name,setName]=useState("Prashanthi");
    let [image,setImage]=useState("https://tse3.mm.bing.net/th?id=OIP.lkz1k9DClK4A9K3b_5Tb9QHaLI&pid=Api&P=0&h=180")
    let [city,setCity]=useState("Hyderabad")
    let [email,setEmail]=useState("prashanthi@gmail.com");
    const changeToMale=()=>{
        setName("Sai Nikhil");
        setImage("https://tse3.mm.bing.net/th?id=OIP.Cf3rSUAqoBhMkJ-HTHq2aAHaLH&pid=Api&P=0&h=180")
        setCity("Sangareddy")
        setEmail("sainikhil@gmail.com")
    }
    const changeToFemale=()=>{
        setName("Prashanthi");
        setImage("https://tse3.mm.bing.net/th?id=OIP.lkz1k9DClK4A9K3b_5Tb9QHaLI&pid=Api&P=0&h=180")
        setCity("Hyderabad")
        setEmail("prashanthi@gmail.com")
    }
    const changeTheme=(event)=>{
        if(event.target.checked){
            setTheme({
                bgColor:"black",
                textColor:"white",
            });
        }
        else{
            setTheme({
                bgColor:"white",
                textColor:"black",
            });
        }
        
    };
    return (
        <div id="flex">
            <div className="imageCol"><img src={image} alt="Profile" width="100%" height={500}/>
            </div>
            <div className="contentCol" style={{backgroundColor : theme.bgColor, color:theme.textColor}}>
                    <dl>
                <dt>User Name</dt>
                <dd>{name}</dd>
                <dt>User City</dt>
                <dd>{city}</dd>
                <dt>Email Id</dt>
                <dd>{email}</dd>
                <dt>Description</dt>
                <dd>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam nulla nisi rerum sequi dolorum facilis deleniti fuga dolorem dignissimos tempora.
                    
                </dd>
            </dl>
           <button onClick={changeToFemale} className="btn btn-outline-secondary mx-5">Prashanthi</button>
           <button onClick={changeToMale} className="btn btn-outline-primary">SaiNikhil</button><br></br>
            <input type="checkbox" className="mx-2 them" onChange={changeTheme}/>Check to switch Dark Mode
    </div>
        </div>
    );
}
export default Profile;