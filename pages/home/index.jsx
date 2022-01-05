import Image from 'next/image'
import { useState } from 'react'
import Body from '../../components/Body'
import Modal from '../../components/Modal'
import BirthdayList from './components/BirthdayList'
import CalendarComponent from './components/CalendarComponent'
import ShapeHome from './components/ShapeHome'


export default function Home() {
  const [isModal, setIsModal] = useState(false)
  return (
  <Body bgColor='#F5DFBB' style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
    <ShapeHome>
        <Image src={'/shapeHome.svg'} height={500} width={500} />
    </ShapeHome>
    <CalendarComponent/>
    <BirthdayList setIsModal={setIsModal}/>
    {isModal ? <Modal route='home' setIsModal={setIsModal} /> : ''}
  </Body>
  )
}
