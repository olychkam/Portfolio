import style from './burgerNav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";
import {useState} from "react";
import MenuIcon from '@material-ui/icons/Menu';

function BurgerNav() {
    const [burgerBtn, setBurgerBtn] = useState (false);
    const onClickBurgerBtn = () => {
        setBurgerBtn (!burgerBtn)
        console.log (burgerBtn)
    }
    return (
        <div className={style.burgerNav}>
            <div className={burgerBtn ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
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
            <MenuIcon onClick={onClickBurgerBtn} className={style.burgerBtn}></MenuIcon>
        </div>
    );
}

export default BurgerNav;
