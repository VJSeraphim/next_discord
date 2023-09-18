"use client"
//still server side rendering
//use client marked -> is still rendered on server side
//but this use client sign means that this should be shown on the client side either
//if is isn't, hydration error occurs

import { useEffect, useState } from "react"

import { CreateServerModal } from "@/components/modals/create-server-modal"

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted) {
        return null
    }

    return (
        <>
            <CreateServerModal />
        </>
    )
}