import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"


const page = async () => {
    const session = await getServerSession(authOptions);
    console.log(session);
    
  return (
    <div>Welcome User {session?.user.username}</div>
  )
}

export default page