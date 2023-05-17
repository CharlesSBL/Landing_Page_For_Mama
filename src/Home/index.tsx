import { Nadiya, Logo, Menu, Obrazy, Info, Contact } from './Components/index';
import './index.css';


function Block() {
  return (
    <div className='blockImage'>
      <div className='image'></div>
    </div>
  )
}

export default function index() {
  return (
    <div className='container'>
      {/* <Logo /> */}
      <Block />
      <div className='block1'>
        <Menu />
        <Nadiya />
      </div>
      <Obrazy />
      {/* <Info /> */}
      {/* <Contact />         */}
    </div>
  )
}
