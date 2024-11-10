import DropButton from './DropButton'
import Logo from '../assets/logo.png'

export default function NavBar() {
  return (
    <div className='nav'>
      <img className='logo' src={Logo} alt="company logo" />
      <ul>
        <DropButton  title='Resource'/>
        <DropButton  title='Our Services'/>
        <DropButton  title='Company'/>
        <DropButton  title='Mobile App'/>
      </ul>
      <button className='btn'><DropButton  title='Client Login'/></button>
      
    </div>
  )
}
