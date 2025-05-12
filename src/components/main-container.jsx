
import { SectionOne } from './Section-one'
import { SectionTwo } from './Section-Two'
import { SectionThree } from './Section-three'
import './Main-container.css'

export const MainContainer = () => {
  return (
    <div className="main-container">
      <section className='main-section'>
        <SectionOne />
        <SectionTwo />
      </section>
      <SectionThree />
    </div>
  )
}