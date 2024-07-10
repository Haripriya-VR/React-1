import React from 'react'

const UserProfile = () => {
  return (
    <div>
      <p>Username : Bob</p>
      <div>
        <span>Email: </span>
        <span>test@test.com</span>
      </div>
      <section>
        <span>Favorite Foods : </span>
        <br/>
        <ul>
            <li>sushi</li>
            <li>pizza</li>
        </ul>
      </section>
    </div>
  )
}

export default UserProfile
