import * as S from "./styles";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

interface MenuTypes {
  props?: any;
}

function Menu(props: MenuTypes) {
  let navigate = useNavigate();
  return (
      <S.Menu>
        <S.MiniProfile>

        </S.MiniProfile>
        <S.Nav>
          <ul>
            <li>
              <Link to="/">
                {/* <div className="icon"></div> */}
                Perfil
              </Link>
            </li>
            <li>
              <Link to="/param/classes">
                
                Projetos
              </Link>
            </li>
            {/* <li>
              <Link to="/param/name">Param #02</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li> */}
          </ul>
        </S.Nav>
      </S.Menu>
  );
}

export default Menu;
