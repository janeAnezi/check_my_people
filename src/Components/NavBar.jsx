import DropButton from './DropButton'

export default function NavBar() {
  return (
    <div className='nav'>
      <img className='logo' src="" alt="" />
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
