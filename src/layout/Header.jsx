import 'bootstrap/dist/css/bootstrap.min.css';
import { Slider } from '../components/Slider';
import { MobileHeaderMenu } from '../components/MobileHeaderMenu';
import { DesktopHeaderMenu } from '../components/DesktopHeaderMenu';

export function Header() {
    return(
        <header>
            <section className = "mobile-nav-section max-sm:hidden">
                <DesktopHeaderMenu/>
            </section>
            <section className = "mobile-nav-section md:hidden">
                <MobileHeaderMenu/>
            </section>
            <section className = "slide-section">
                <Slider/>
            </section>
        </header>
    )
}