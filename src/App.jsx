import CreateRoom from './components/CreateRoom';
import RoomList from './components/RoomList';
import SendMessage from './components/SendMessage';
import MessageList from './components/MessageList';
import { useState } from 'react';

export default function App() {
  const [currentRoomId, setCurrentRoomId] = useState(null);
  return (
    <div>
      {!currentRoomId ?(
        <>
          <CreateRoom />
          <RoomList onJoin = {(roomId) => setCurrentRoomId(roomId)}/>
          </>
      ):(
        <>
        <MessageList roomId = {currentRoomId} />
        <SendMessage roomId = {currentRoomId} userId = "User1" />
        <button onClick = {() => setCurrentRoomId(null)}>Leave Room</button>
      </>
      )}
    </div>
   )
}