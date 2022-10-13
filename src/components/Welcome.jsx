import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Welcome.css";

import Quiz from "../img/healt.svg";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Bem-vindos...</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Início do Quiz" />
      <footer>
        
        <div id="p_git"><a href="https://github.com/Sergiofrm" target="_blank">Sergiofrm</a>
        <a> | </a>
        <a href="https://github.com/jclaudiotomasjr" target="_blank">Jclaudiotomasjr</a>
        </div>

        <p>© 2022 Equipe JS-Solutions</p> 
        </footer>
    </div>
    
    
  );
};

export default Welcome;
