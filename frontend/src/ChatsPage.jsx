import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps=useMultiChatLogic('2457cf62-55a3-4629-b5af-fd53a96d092c',
    props.user.username,
    props.user.secret
    );
    return (
    <div style={{ height: '100vh'}}>
        <MultiChatSocket{...chatProps}/>
        <MultiChatWindow {...chatProps} style={{ height: '100%'}}/>
    </div>
    )
}
export default ChatsPage