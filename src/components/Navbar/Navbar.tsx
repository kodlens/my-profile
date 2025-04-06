import Logo from '../Logo'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='border-b border-b-black'>
      <div className='flex justify-between px-4 lg:px-0 py-5 max-w-5xl mx-auto'>
          <Logo />

          <div className='flex gap-4 font-bold'>
            <Link to='/'>Home</Link>
            <Link to='/projects'>About</Link>
            <Link to='/services'>Services</Link>
          </div>
      </div>

    </div>
  )
}
