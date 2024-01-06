import React from 'react'
import { checkPropTypes  } from 'prop-types'

const Student = (props) => {
  return (
    <div>
    <div class="card" style={{width: "18rem"}}>
  <img src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" alt="Card image cap"/>
  <div class="card-body">
    <h5 className="card-title">Student Details</h5>
    <h5 className="card-title">Name</h5>
    <h5 className="card-title">Roll No</h5>
    <h5 className="card-title">City</h5>
    <h5 class="card-title"></h5>

   
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
  )
//   Student.PropTypes = {
//     rno:PropTypes.number.isRequired,
//     name : PropTypes.string.isRequied,
//     city : PropTypes.string.isRequired
//   }
//   Student.defaultProps ={
//     rno :1111,
//     name : 'Enter Name Here',
//     city : 'Enter City'
//   }


}

export default Student