import img1 from '../assets/logo02.png'
import img2 from '../assets/logo03.png'
import img3 from '../assets/logo07.png'
import img4 from '../assets/logo04.png'
import img5 from '../assets/logo05.png'
import img6 from '../assets/logo06.png'

export default function PlatformSlide() {
  return (
    <div className='logo-slide'>
      <img src={img1} alt="company logo" />
      <img src={img2} alt="company logo" />
      <img src={img3} alt="company logo" />
      <img src={img4} alt="company logo" />
      <img src={img5} alt="company logo" />
      <img src={img6} alt="company logo" />
    </div>
  )
}
