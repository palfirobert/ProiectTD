import { PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    
    return (
    <div style={{ height: '100vh'}}>
        <PrettyChatWindow
        projectId="2457cf62-55a3-4629-b5af-fd53a96d092c"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%' }}
      />
    </div>
    )
}
export default ChatsPage