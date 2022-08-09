import React from 'react'

export const GitUserCard = (props) => {
    const { login, id, avatar_url, type, followers_url,following_url, gists_url }=props.userDetails
    console.log(login, id, avatar_url, type, followers_url,following_url, gists_url)
  return (
    <div className='GitUserCard'>
       <h3>{id}</h3> 
       <img src={avatar_url} />
        <h2>{login}</h2> 
        <a href={gists_url}>See Gits</a>
        <a href={followers_url}>See followers</a>      
        <a href={following_url}>See following</a> 
    </div>
  )
}
