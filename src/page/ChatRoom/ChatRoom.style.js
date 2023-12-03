const chatStyles = {
	container: {
		width: 300,
		height: 300,
		border: '1px solid',
		overflowY: 'scroll',
	},
	footerContainer: {
		maxWidth: 300,
		display: 'flex',
		flex: 1,
	},
	inputContainer: {
		flex: 1,
	},
	currentUserMsgContainer: {
		flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
	},
	msgContainer: {
		flex: 1,
    display: 'flex',
	},
	messageText: {
		backgroundColor: '#F0F0F0',
		margin: '5px 2px',
		padding: 5,
		borderRadius: 8,
		border: '0.1px solid #F0F0F0',
	},
	currentUserName: {
		textAlign: 'right',
		margin: 0,
		textTransform: 'uppercase',
		fontSize: 12
	},
	userNameText: {
		textAlign: 'left',
		margin: 0,
		textTransform: 'uppercase',
		fontSize: 12
	},
	innerMessageText: {
		margin: 0,
		fontSize: 14,
		wordWrap: 'break-word',
    	textAlign: 'left',
	}
}
export {chatStyles};