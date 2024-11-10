import homeImage from '../assets/home.png'

export default function Home({heading, par, btnOne, btnTwo}) {
  return (
    <div className='home'>
        <div className='left'>
            <h1>{heading}</h1>
            <p>{par}</p>
            <div>
                <button className='get-started-btn'>{btnOne} </button>
                <button className='login-btn'>{btnTwo}</button>
            </div>
        </div>
        <div><img src={homeImage} alt="a hand with directional arrow" /></div>
    </div>
  )
}
