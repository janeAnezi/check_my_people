import homeImage from '../assets/home.png'

export default function Home() {
  return (
    <div className='home'>
        <div className='left'>
            <h1>Confirming your staff identity and credibility</h1>
            <p>An all in one platform to help you verify & confirm that employees are who they say they are.</p>
            <div>
                <button className='get-started-btn'>Get Started</button>
                <button className='login-btn'>Login</button>
            </div>
        </div>
        <div><img src={homeImage} alt="a hand with directional arrow" /></div>
    </div>
  )
}
