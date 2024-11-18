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
      <Home heading="Verify the identity and credibility of your staff with confidence."par='"A comprehensive platform to verify and confirm employee authenticity."' imgScr={homeImage} btnOne='Get Started' btnTwo='Login' />
      <Platform />
      <ChildNanny heading='Verify your identity with Trueid' par="TrueID provides a secure and reliable solution to verify your identity with ease. Our platform ensures authenticity and builds trust, empowering you to prove who you are confidently." imgScr={nannyImg} btnOne='Get Started' btnTwo='Login'/>
      <Cook heading='Verify your Employee with Trueid' par="TrueID offers a seamless and trustworthy way to verify your employees' identities. Ensure credibility, reduce risks, and build a dependable workforce with our reliable verification platform." imgScr={cookImg} btnOne='Get Started' btnTwo='Login'/>
      <Driver heading='Verify your Driver and Security Staff with Trueid' par='Employee identification and Verification can help validate the qualifications, skills, and work experience of potential employees, ensuring that they possess the necessary expertise for the job.' imgScr={driverImg} btnOne='Get Started' btnTwo='Login'/>
      <SignUpCard />
      <Footer />
    </>
  )
}

export default App
