import { InitialModal } from "@/components/modals/initial-modal"
import { db } from "@/lib/db"
import { initialProfile } from "@/lib/initial-profile"
import { redirect } from "next/navigation"

const SetupPage = async () => {
    const profile = await initialProfile()

    const server = await db.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    })
    // have to find any server which this profile is member of
    // search all servers and find the first server which is member of that server, and load it by general channel
    
    if(server) {
        return redirect(`/servers/${server.id}`)
    }
    
    //but, if there is no server belong to, should inform message to create or join server.
    return (
        <InitialModal />
    )
}

export default SetupPage