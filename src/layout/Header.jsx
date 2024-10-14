import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Slider } from '../components/Slider';

export function Header() {
    return(
        <header>
            <section className = "nav-section">
                <div className = "flex justify-between">
                  <div>
                    <h3 className = "mont font-bold text-2xl text-[#252B42] ml-9 mt-9">BB Butik</h3>
                  </div>
                  <div className = "flex justify-end text-2xl text-[#252B42] mr-9 mt-9 gap-6">
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <FontAwesomeIcon icon={faCartShopping} />
                    <FontAwesomeIcon icon={faBars} />
                  </div>
                </div>
                <div>
                <nav className = "flex flex-col items-center font-medium my-24 text-3xl gap-8 text-[#737373]">
                    <NavLink className = "font-normal" to="">Home</NavLink>
                    <NavLink to="">Product</NavLink>
                    <NavLink to="">Pricing</NavLink>
                    <NavLink to="">Contact</NavLink>
                </nav>
                </div>
            </section>
            <section className = "slide-section">
                <Slider/>
            </section>
        </header>
    )
}