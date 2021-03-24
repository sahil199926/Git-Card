import React, { Profiler } from 'react';
const Card=({profile})=>{
   
return(<div className="cad" >
    <div className='dit' > 
    <h2>Name-{profile.name} </h2>
    <h2>Followers-{profile.followers}</h2>
    <h4> repositories-{profile.public_repos}</h4>
    </div>
<div className='im'><img src={profile.avatar_url}/>
</div>
</div>);
}


export default Card;