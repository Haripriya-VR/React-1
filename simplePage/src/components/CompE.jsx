import React, {useContext} from 'react'
import CompF from './CompF'

import { UserContext } from '../App'


const CompE = () => {
    const user = useContext(UserContext)
    console.log('compE');
  return (
    <div>
      this is my {user}
    </div>
  )
}



export default CompE
