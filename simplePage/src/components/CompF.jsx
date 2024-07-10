import React from 'react'

import { UserContext } from '../App'
const CompF = () => {
    console.log('compF');
  return (
    <div>
      <UserContext.Consumer>
        {
            user =>{
                return <div> User value = {user}</div>
            }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default CompF
