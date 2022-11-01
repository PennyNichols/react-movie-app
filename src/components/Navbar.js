import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className='navbar navbar-expand-lg fixed-top navbar-dark' style={ { backgroundColor: '#070707' } }>
      <div className='container-fluid'>
        <Link to="/" className='navbar-brand'>
          <h4 className='text-danger'> React Movie App</h4>
        </Link>
        <div className='d-flex align-items-center'>
          <button type="button"
            className='ms-2 btn btn-outline-light'
            onClick={()=> navigate('/login')}
          > Login </button>
          <button type="button"
            className='ms-2 btn btn-outline-light'
            onClick={ ()=>navigate('/register')}
          >Register</button>
        </div>
      </div>

    </nav>
  )
}

export default Navbar