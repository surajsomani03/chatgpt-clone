import { Link } from "react-router-dom"
import "./chatList.css";

const ChatList = () => {
  return (
    <div className="chatList">
        <div className="title">DASHBOARD</div>
        <Link to="/dashboard">Create a new Chat</Link>
        <Link to="/">Explore SURAJ AI</Link>
        <Link to="/">Contact</Link>
        <hr/>
        <div className="title">RECENT CHATS</div>
        <div className="list">
            <Link to="/">My Chat Title</Link>
            <Link to="/">My Chat Title</Link>
            <Link to="/">My Chat Title</Link>
            <Link to="/">My Chat Title</Link>
            <Link to="/">My Chat Title</Link>
        </div>
        <hr/>
        <div className="upgrade">
            <img src="/logo.png" alt="" />
            <div className="texts">
                <span>upgrade to Suraj AI pro</span>
                <span>Get unlimited access to all features</span>
            </div>
        </div>
    </div>
  )
}

export default ChatList