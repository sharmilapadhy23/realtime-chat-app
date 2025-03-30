import {useState} from 'react';
import {supabase} from '../supabaseClient';

export default function SendMessage({roomId,userId}) {
    const [message,setMessage] = useState('');       
            const sendMessage = async () => {
                const {error} = await supabase.from('messages').insert([{room_id: roomId,user_id:userId,content: message},
                ]);
                if (error){
                console.error(error.message);
                }
                else{
                setMessage('');
                }    
    };
    return (
        <div>
            <input type = "text" placeholder = "Type your message..." value = {message} onChange = {(e) => setMessage(e.target.value)} />
            <button onClick = {sendMessage}>Send</button>
        </div>
    );
}
