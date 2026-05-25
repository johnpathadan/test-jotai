import { useAtom } from "jotai";
import { loadableUserAtom } from "@/app/atoms";

const UserInfo = () => {
  const [user] = useAtom(loadableUserAtom);

  if(user.state === "hasError") return <h1>Error Occurred..</h1>
  if(user.state === "loading") return <h1>Loading...</h1>
  console.log(user.data);
  return (
    <div>
        <h1>User Info</h1>
        <p>Name: {user.data?.name}</p>
        <p>Email: {user.data?.email}</p>
    </div>
  )
}

export default UserInfo