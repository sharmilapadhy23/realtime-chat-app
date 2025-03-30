import { useState , useEffect} from 'react';
import  {supabase} from '../supabaseClient';
export default function RoomList({onJoin}) {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        const fetchRooms = async () => {
            const {data,error} = await supabase.from('chat_rooms').select('*');
            if (error){
                console.error('Error fetching rooms:',error.message);
            }
            else{
                setRooms(data);
            }
        };
        fetchRooms();
    }, []);
    return (
        <div>
            <h3>
                Available Rooms
            </h3>
            {rooms.length > 0 ? (
                rooms.map((room) => (<div key = {room.id}> 
                <span>{room.name}</span>
                <button onClick={() => onJoin(room.id)}> Join</button>
            </div>))
            ):(
                <p> No rooms available</p>
            )}
        </div>
    );
}
