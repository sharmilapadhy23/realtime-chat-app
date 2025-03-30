import { useState } from 'react';
import { supabase } from '../supabaseClient';
export default function CreateRoom() {const [roomName,setRoomName] = useState('');
    const createRoom = async () => {
        const {error } = await supabase.from('chat_rooms').insert([{name : roomName}]);
        if (error){
            console.error(error.message);
        }
        else{
            alert('Room created sucuessfully!');
            setRoomName('');
        }
    };
    return (
        <div>
            <input type = "text" placeholder = "Enter room name" value = {roomName} onChange = {(e) => setRoomName(e.target.value)} />
            <button onClick = {createRoom}>Create Room </button>
        </div>
    );
}
