import NavBar from './Components/NavBar'
import './App.css'
import Home from './Components/Home'
import Platform from './Components/Platform'

function App() {


  return (
    <>
      <NavBar />
      <Home heading='Confirming your staff identity and credibility' par='An all in one platform to help you verify & confirm that employees are who they say they are.' btnOne='Get Started' btnTwo='Login' />
      <Platform />
      <Home heading='Verify your Child Nanny with CheckMyPeople' par='People have a need for trust, security, and peace of mind within their homes. They seek assurance that the individuals they hire are trustworthy, reliable, and pose no threat to their safety or the safety of their families.' btnOne='Get Started' btnTwo='Login'/>
    </>
  )
}

export default App
