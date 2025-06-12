export const myRoomPromise = (email) => {
    return fetch(`http://localhost:3000/userrooms?email=${email}`)
    .then(res => res.json())
}