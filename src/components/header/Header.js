import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { languagee } = useSelector((state) => state);
  const { user } = useSelector((state) => state.auth);

  const history = useHistory();
  const { t } = useTranslation();

  // Crear un estado local para controlar la visibilidad del header
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    // Verificar si el usuario tiene el rol "bloqueado"
    if (user.role === "bloqueado") {
      // Redirigir al usuario bloqueado a la página de bloqueos
      history.push('/bloqueos');

      // Ocultar el header
      setIsHeaderVisible(false);
    } else {
      // Mostrar el header para otros usuarios
      setIsHeaderVisible(true);
    }
  }, [user, history]);

  // Renderizar el header condicionalmente
  return isHeaderVisible ? (
    <div className="header bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between align-middle">
        <Link to="/" className="logo">
          <h1
            className="navbar-brand text-uppercase p-0 m-0"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            {t('Tassili', { lng: languagee.language })}
          </h1>
        </Link>

        <Menu />
      </nav>
    </div>
  ) : null;
};

export default Header;

