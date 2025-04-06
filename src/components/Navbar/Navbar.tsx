import Logo from '../Logo'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex justify-between px-10 py-5'>
        <Logo />

        <div className='flex gap-4 font-bold'>
          <Link to='/'>Home</Link>
          <Link to='/projects'>About</Link>
          <Link to='/services'>Services</Link>
        </div>
    </div>
  )
}
