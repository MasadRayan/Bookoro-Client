export const myRoomPromise = (email, accessToken) => {
    return fetch(`https://bookoro-server-side.vercel.app/userrooms?email=${email}`, {
        headers: {
            authorization : `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
}