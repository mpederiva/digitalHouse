import './style.scss';
import { SextaAulaItemHorizontal } from '../../components/SextaAulaItemHorizontal';
import { SextaAulaItemVertical } from '../../components/SextaAulaItemVertical';
import {
  cheapGames,
  halloweenGames,
  earlyAccessGames,
  newGames,
} from './games.js';

export function SextaAula() {
  return (
    <>
      <main className='pageMain'>
        <h1>DH Games</h1>

        <div className='listConteiner'>
          <h1>New Games</h1>
          {newGames.map((newGame, index) => {
            return <SextaAulaItemVertical key={index} item={newGame} />;
          })}
        </div>

        <div className='cardConteiner'>
          {halloweenGames.map((halloweenGame, index) => {
            return <SextaAulaItemHorizontal key={index} item={halloweenGame} />;
          })}
        </div>

        <div className='listConteiner'>
          <h1>Early Access Games</h1>
          {earlyAccessGames.map((earlyAccessGame, index) => {
            return <SextaAulaItemVertical key={index} item={earlyAccessGame} />;
          })}
        </div>

        <div className='cardConteiner'>
          {cheapGames.map((cheapGame, index) => {
            return <SextaAulaItemHorizontal key={index} item={cheapGame} />;
          })}
        </div>
      </main>
    </>
  );
}