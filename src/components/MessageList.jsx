import { useState , useEffect} from 'react';
import  {supabase} from '../supabaseClient';
export default function MessageList({roomId}) {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const fetchMessages = async () => {
            const {data,error} = await supabase.from('messages').select('*').eq('room_id',roomId);
            if (error){
                console.error(error.message);
            }
            else{
                setMessages(data);
            }
        };
        fetchMessages();
        const subscription = supabase.channel(`room_${roomId}`).on('postgres_changes',{event : 'INSERT',schema: 'public',table:'messages'},(payload)=> {
            setMessages((prevMessages)=> [ ...prevMessages,payload.new]);
            playNotificationSound();
        })
        .subscribe();
        return () => subscription.unsubscribe();},[roomId]);
        const playNotificationSound = () => {
            const audio = new Audio('../assets/notification.mp3');
            audio.volume = 0.1;
            audio.play();
        };
    return (
        <div>
            <h3>
                Messages
            </h3>
            {messages.map((msg) => (<p key = {msg.id}> 
                <strong>{msg.user_id}:</strong> {msg.content}
            </p>))}
        </div>
    );
}
