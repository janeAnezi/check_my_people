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
        <p className='par'>An all in one platform to help you verify & confirm that employees are who they say they are.</p>
        <div className='platform-cards'>
            <Card title='01'> 
                <img src={Imag01} alt="Person verification status" />
                <h2>Verify Identity</h2>
                <p>We offer our service via our web platform as well as Online App (CheckMyPeople) on Play Store and App Store.</p>
            </Card>
            <Card title='02'>
                <img src={Imag01} alt="Person verification status" />
                <h2>Verify Identity</h2>
                <p>We offer our service via our web platform as well as Online App (CheckMyPeople) on Play Store and App Store.</p>
            </Card>
            <Card title='03'>
                <img src={Imag01} alt="Person verification status" />
                <h2>Verify Identity</h2>
                <p>We offer our service via our web platform as well as Online App (CheckMyPeople) on Play Store and App Store.</p>
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
