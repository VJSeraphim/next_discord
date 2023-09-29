'use client'

import { ServerWithMembersWithProfiles } from "@/types"
import { ChannelType, MemberRole } from "@prisma/client"

interface ServerSectionProps {
    label: string
    role?: MemberRole
    sectionType: "channels" | "members"
    channelType?: ChannelType
    server?: ServerWithMembersWithProfiles
}

export const ServerSection = () => {
    return (
        <div>
            server-section
        </div>
    )
}