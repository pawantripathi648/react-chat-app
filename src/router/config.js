import { createBrowserRouter } from "react-router-dom";
import { ChatRoom, ChatSignIn } from "../page";
import { CHATROOM, DEFAULT } from "./key";

const router = createBrowserRouter([
    {
        path: DEFAULT,
        element: <ChatSignIn />
    },
    {
        path: CHATROOM,
        element: <ChatRoom />
    },
]);

export default router;