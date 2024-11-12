import NavBar from './Components/NavBar'
import './App.css'
import Home from './Components/Home'
import Driver from './Components/Driver'
import ChildNanny from './Components/ChildNanny'
import Platform from './Components/Platform'
import homeImage from '../src/assets/home.png'
import nannyImg from '../src/assets/nanny.png'
import cookImg from '../src/assets/cook.png'
import driverImg from '../src/assets/driver.png'
import Cook from './Components/Cook'
import SignUpCard from './Components/SignUpCard'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      <NavBar />
      <Home heading='Confirming your staff identity and credibility' par='An all in one platform to help you verify & confirm that employees are who they say they are.' imgScr={homeImage} btnOne='Get Started' btnTwo='Login' />
      <Platform />
      <ChildNanny heading='Verify your Child Nanny with CheckMyPeople' par='People have a need for trust, security, and peace of mind within their homes. They seek assurance that the individuals they hire are trustworthy, reliable, and pose no threat to their safety or the safety of their families.' imgScr={nannyImg} btnOne='Get Started' btnTwo='Login'/>
      <Cook heading='Verify your Cook & Househelp with CheckMyPeople' par='Employee identification and verification helps allay security concerns by verifying the background and identity of potential employees, reducing the risk of hiring individuals with criminal records or questionable backgrounds.' imgScr={cookImg} btnOne='Get Started' btnTwo='Login'/>
      <Driver heading='Verify your Driver and Security Staff with CheckMyPeople' par='Employee identification and Verification can help validate the qualifications, skills, and work experience of potential employees, ensuring that they possess the necessary expertise for the job.' imgScr={driverImg} btnOne='Get Started' btnTwo='Login'/>
      <SignUpCard />
      <Footer />
    </>
  )
}

export default App
