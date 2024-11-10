import Imag01 from '../assets/cardimag01.png'
import Card from './Card'

export default function Platform() {
  return (
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
  )
}
