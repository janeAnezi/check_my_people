

export default function ChildNanny({heading, par, btnOne, btnTwo, imgScr}) {
    return (
      <div className='home-driver'>
        
        <div className='left'>
            <h1>{heading}</h1>
            <p>{par}</p>
            <div>
                <button className='get-started-btn'>{btnOne} </button>
                <button className='login-btn'>{btnTwo}</button>
            </div>
        </div>
        <div><img src={imgScr} alt="a hand with directional arrow" /></div>
      </div>
    )
  }
  