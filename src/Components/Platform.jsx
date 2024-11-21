import Imag01 from '../assets/cardimag01.png'
import Card from './Card'

import img1 from '../assets/logo02.png'
import img2 from '../assets/logo03.png'
import img3 from '../assets/logo07.png'
import img4 from '../assets/logo04.png'
import img5 from '../assets/logo05.png'
import img6 from '../assets/logo06.png'


export default function Platform() {
  return (
    <div>
        <div className='platform'>
        <p className='par'>"An all-in-one platform designed to verify and confirm the authenticity of your employees, ensuring they are exactly who they claim to be."</p>
        <div className='platform-cards'>
            <Card title='01'> 
                <img src={Imag01} alt="Person verification status" />
                <h2>Online Change of Name and Newspaper Publication</h2>  
                <p>Access our services through our web platform or the Trueid app, available on both the Play Store and App Store.</p>
            </Card>
            <Card title='02'>
                <img src={Imag01} alt="Person verification status" />
                <h2>Verify National Identity Card</h2>
                <p>Access our services through our web platform or the Trueid app, available on both the Play Store and App Store.</p>
            </Card>
            <Card title='03'>
                <img src={Imag01} alt="Person verification status" />
                <h2>Verify Corporate Affairs Commission Registration</h2>
                <p>Access our services through our web platform or the Trueid app, available on both the Play Store and App Store.</p>
            </Card>
            <Card title='04'>
                <img src={Imag01} alt="Person verification status" />
                <h2>Online Affidavit</h2>
                <p>Access our services through our web platform or the Trueid app, available on both the Play Store and App Store.</p>
            </Card>
        </div>
        </div>
        <div className='logo-slide'>
            <img src={img1} alt="company logo" />
            <img src={img2} alt="company logo" />
            <img src={img3} alt="company logo" />
            <img src={img4} alt="company logo" />
            <img src={img5} alt="company logo" />
            <img src={img6} alt="company logo" />
        </div>
    </div>
  )
}
