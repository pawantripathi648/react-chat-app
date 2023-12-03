import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DEFAULT } from "../../router/key";
import { chatStyles as styles } from "./ChatRoom.style";
import { useDispatch, useSelector } from "react-redux";
import { setChatMessage } from "../../redux/reducer/chat-reducer";

const ChatRoom = () => {
	const { search } = useLocation();
	const { messages } = useSelector(state => state.chatroom);
	const dispatch = useDispatch();
	const [user, setUser] = useState('');
	const [message, setMessage] = useState('');
	const navigate = useNavigate();
	useEffect(() => {
		if (search) {
			const userName = decodeURIComponent(search.split("=")[1]);
			setUser(userName);
		} else {
			navigate(DEFAULT, { replace: true });
		}
	}, [user]);
	const onChangeMessage = (e) => {
		setMessage(e.target.value);
	}
	const onMessageSend = (e) => {
		e.preventDefault();
		if (message) {
			// dispatching
			dispatch(setChatMessage({
				user,
				message,
				date: new Date().getTime(),
			}));
			setMessage(""); // Clearing the text input after sending message
		} else {
			alert("Please enter the message!");
		}
	}
	const renderChatMessages = () => {
		return messages.map(msg => {
			const isCurrentUser = user === msg.user;
			return (
				<div
					style={isCurrentUser ? styles.currentUserMsgContainer : styles.msgContainer}
				>
					<span style={styles.messageText}>
						<p style={isCurrentUser ? styles.currentUserName : styles.userNameText}>{msg.user}</p>
						<p style={styles.innerMessageText}>{msg.message}</p>
					</span>
				</div>
			)
		})
	}
	return (
		<div>
			<p>{`Welcome ${user}!`}</p>
			<center>
				<div style={styles.container}>
					{renderChatMessages()}
				</div>
				<div style={styles.footerContainer}>
					<input
						type="text"
						value={message}
						placeholder="Enter your message!"
						onChange={(e) => onChangeMessage(e)}
						style={styles.inputContainer}
					/>
					<button onClick={(e) => onMessageSend(e)}>
						Send
					</button>
				</div>
			</center>
		</div>
	)
}
export default ChatRoom;