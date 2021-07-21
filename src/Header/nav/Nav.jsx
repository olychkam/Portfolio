import style from './Nav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";

function Nav() {
    return (
        <div className={style.nav}>
            <Link to={'main'}
                  activeClass={style.active}
                  spy={true}
                  smooth={true}
                  offSet={1}
                  duration={500}>Main</Link>
            <Link to={'about'}
                  activeClass={style.active}
                  spy={true}
                  smooth={true}
                  offSet={1}
                  duration={500}>About</Link>
            <Link to={'skills'}
                  activeClass={style.active}
                  spy={true}
                  smooth={true}
                  offSet={1}
                  duration={500}>Skills</Link>
            <Link to={'project'}
                  activeClass={style.active}
                  spy={true}
                  smooth={true}
                  offSet={1}
                  duration={500}
            >Projects</Link>
            <Link to={'contacts'}
                  activeClass={style.active}
                  spy={true}
                  smooth={true}
                  offSet={1}
                  duration={500}>Contacts</Link>
        </div>
    );
}

export default Nav;
