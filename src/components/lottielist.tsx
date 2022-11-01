import Lottie from 'lottie-react'
import lottieList from '../assets/lottielist.json'

const LottieAnim: React.FC = () => {
  return (
    <Lottie
      className='w-80 h-80 absolute top-[-150px] right-[-150px] rotate-12 drop-shadow-lg'
      animationData={lottieList}
      loop = {false}
    />
  )
}

export default LottieAnim
