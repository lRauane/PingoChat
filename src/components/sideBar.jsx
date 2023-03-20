import NavBar from "./NavBar";
import Search from "./search";
import Chats from "./chats";

export default function SideBar(){
  return (
    <div className="sideBar">
      <NavBar />
      <Search />
      <Chats />
    </div>
  )
}
