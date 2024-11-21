// import NavBar from './Components/NavBar'
import './App.css'
import Home from './Components/Home'
import SectionO from './Components/SectionO'
import Platform from './Components/Platform'
import homeImage from '../src/assets/home.png'
import nannyImg from '../src/assets/nanny.png'
import cookImg from '../src/assets/cook.png'
import driverImg from '../src/assets/driver.png'
import Cook from './Components/Cook'
import Footer from './Components/Footer'
import NewNav from './Components/newNav'


function App() {


  return (
    <>
      {/* <NavBar /> */}
      <NewNav />
      <Home heading='Confirming your staff identity and credibility' par='An all in one platform to help you verify & confirm that employees are who they say they are.' imgScr={homeImage} btnOne='Get Started' btnTwo='Login' />
      <Platform />
      <SectionO heading='Verify your Child Nanny with CheckMyPeople' par='People have a need for trust, security, and peace of mind within their homes. They seek assurance that the individuals they hire are trustworthy, reliable, and pose no threat to their safety or the safety of their families.' imgScr={nannyImg} btnOne='Get Started' btnTwo='Login'/>
      <Cook heading='Verify your Cook & Househelp with CheckMyPeople' par='Employee identification and verification helps allay security concerns by verifying the background and identity of potential employees, reducing the risk of hiring individuals with criminal records or questionable backgrounds.' imgScr={cookImg} btnOne='Get Started' btnTwo='Login'/>
      <SectionO heading='Verify your Driver and Security Staff with CheckMyPeople' par='Employee identification and Verification can help validate the qualifications, skills, and work experience of potential employees, ensuring that they possess the necessary expertise for the job.' imgScr={driverImg} btnOne='Get Started' btnTwo='Login'/>
      <div className='signupcard'>
        <h1>Get started today</h1>
        <p>Create a free account. Start collecting better research data today — no credit card or contract required. Full name. Email address. Password.</p>
        <button>Sign Up</button>
      </div>
      <Footer />
    </>
  )
}

export default App
