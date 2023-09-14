import React ,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import { useHistory } from 'react-router-dom'
import { useSelector  } from 'react-redux'
import { useTranslation } from 'react-i18next'
const Header = () => {
    const {  languagee } = useSelector(state => state)
  const { user } = useSelector(state => state.auth);
    

    const history = useHistory()
  useEffect(() => {
      
    if  (user.role ="bloqueado") {
      
      history.push('/pages/bloqueos');
    }
  }, [user, history]);
    const { t } = useTranslation();
    return (
        <div className="header bg-light">
            <nav className="navbar navbar-expand-lg navbar-light 
            bg-light justify-content-between align-middle">

                <Link to="/" className="logo">
                    <h1 className="navbar-brand text-uppercase p-0 m-0"
                    onClick={() => window.scrollTo({top: 0})}>
                        {t('Tassili', { lng: languagee.language })}
                    </h1>
                </Link>
 

                <Menu />
            </nav>
        </div>
    )
}

export default Header
