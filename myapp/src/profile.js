import React from 'react';

import actionComponent from './actionComponent';


    const Profile =props=> {
return (
<div>
<p>Full Name:{props.fullname}</p>
<p>Age:{props.age}</p>
<p>Profession:{props.profession}</p>
</div>)}

const Picture = (props) => {
    return (
      <div>
        {props.children}
      </div>
    )
   };
   
   

const PROFILE = () => {
return (<  Profile
fullname="kouki malika" bio="etudiante" profession="devloppeuse junior"
/>);}
const image = () => {
 <div>
 <Picture >
          <img src={image} />
 </Picture>
 </div>
};
const ActionLink=()=>{
const handleName =name=>{name.preventDefault();
alert(props.fullname);};
return<actionComponent handleName={handleName}/>;};


export default ActionLink;
Profile.defaultProps={fullname:'kouki malika',bio:'etudiante',profession='devloppeuse junior'};
export default Profile;