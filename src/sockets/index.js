import getOnlineList from './getOnlineList';
import chatWorld from './chat/chatWorld';
import chatRoom from './chatRoom';
import getRoomList from './getRoomList';
import getRankList from './getRankList';
import inRoom from './inRoom';
import game from './game';
import matchingGame from './matchingGame';
import inGame from './inGame';

const initSockets = (io) => {
  matchingGame(io);
  getRoomList(io);
  getOnlineList(io);
  // chatWorld(io);
  chatRoom(io);
  getRankList(io);
  inRoom(io);
  inGame(io);
  // game(io);
};

export default initSockets;
