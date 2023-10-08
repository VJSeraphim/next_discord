"use client"

import { useSocket } from "./providers/socket-provider"
import { Badge } from "@/components/ui/badge"

export const SocketIndicator = () => {
    const { isConnected } = useSocket()

    if(!isConnected) {
        return (
            <Badge variant="outline" className="bg-rose-500 text-white border-none">
                Connecting to live... Polling every seconds
            </Badge>
        )
    }

    return (
        <Badge variant="outline" className="bg-emerald-500 text-white border-none">
            Connection is Live
        </Badge>
    )
}