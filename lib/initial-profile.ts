import { currentUser, redirectToSignIn } from "@clerk/nextjs";

import { db } from "./db";

export const initialProfile = async () => {
    const user = await currentUser()

    if(!user) {
        return redirectToSignIn() // must log in
    }

    const profile = await db.profile.findUnique({
        where: {
            userId: user.id
        }
    }) //attempt to find the profile logged in

    if(profile) {
        return profile
    } //already existing user - simlpe return func

    const newProfile = await db.profile.create({
        data: {
            userId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress
        }
    }) // create new profile for the new user

    return newProfile
}