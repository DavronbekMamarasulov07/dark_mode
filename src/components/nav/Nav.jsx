import logo from '../../images/logo.svg'
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import './Nav.css'
import Container from '../container';
import { useTranslation } from "react-i18next"
import i18n from "../../locales/index.js"
import { useContext } from 'react';
import AppContext from '../../context/store/index.jsx';

const Nav = () => {
  const { t } = useTranslation()
  const [state,dispatch] = useContext(AppContext)
  console.log(state)

  const handleChangeLang = (e) => {
    i18n.changeLanguage(e)
  }
  return (
    <nav className='nav'>
      <Container>
        <div className='flex flex-col gap-2 pt-2'>
          <select className='w-[50px] select_lang' onChange={(e) => handleChangeLang(e.target.value)} defaultValue={i18n.language}>
            <option value="uzb">UZ</option>
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>
        
        <ul className='flex justify-between items-center pt-2 pb-4'>
          <li><img src={logo} alt="logo" /></li>
          <li><h2 className='blog_text text-stone-900 text-2xl font-bold  underline'>{t("nav.title")}</h2></li>
          <li className='theme-toggle'>
              <input className='' type="checkbox" id="theme" onChange={(e) => dispatch({type: "CHANGE_THEME", theme: e.target.checked})} />
              <label htmlFor="theme">
                <BsFillSunFill className='sun' />
                <BsFillMoonFill className='moon' />
              </label>
          </li>
        </ul>
        </div>
      </Container>
    </nav>
  )
}

export default Nav

