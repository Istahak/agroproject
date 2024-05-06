import CreatePost from "./CreatePost";
import Home from "./Home";
// import Notifications from "./Notifications";
// import ProfileLink from "./ProfileLink";
// import Search from "./Search";

const SidebarItems = () => {
	return (
		<>
			<Home className='border'/>
			{/* <Search /> */}
			{/* <Notifications /> */}
			<CreatePost />
			{/* <ProfileLink /> */}
		</>
	);
};

export default SidebarItems;