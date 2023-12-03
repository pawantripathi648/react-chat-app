import { useNavigate } from "react-router-dom";
import { CHATROOM } from "../../router/key";
import { useState } from "react";

const ChatSignIn = () => {
	const [username, setUserName] = useState('');
	const navigate = useNavigate();
	const navigateToChatRoom = (e) => {
		e.preventDefault();
		if(username.trim()) {
			navigate(`${CHATROOM}?user=${username}`);
		} else {
			alert("Please enter username");
		}
	}
	const onChange = (e) => {
		const value = e.target.value;
		setUserName(value);
	}
	return (
		<center>
			<input
				placeholder="Enter username"
				value={username}
				onChange={(e) => onChange(e)}
			/>
			<button onClick={(e) => navigateToChatRoom(e)}>
				Enter Chatroom
			</button>
		</center>
  )
}
export default ChatSignIn;