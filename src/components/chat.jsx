import Messages from "./messages"
import Input from "./input"
import { useContext } from "react"
import { ChatContext } from "../context/ChatContext"

export default function Chat(){

  const {data} = useContext(ChatContext)

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
      </div>
      <Messages />
      <Input />
    </div>
  )
}
