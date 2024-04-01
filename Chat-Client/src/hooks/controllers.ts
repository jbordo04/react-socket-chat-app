// import { ChatModel } from "../"

export const getChatsWith = (user: string, token: string) => {
  return fetch(`/chat/${user}/null`, {
    headers: {
      Authorization: "Bearer " + token,
      // "Content-Type": "application/json",
    },
    method: "GET",
    credentials: "include",
  })
}

export const getChat = async (
  user: string,
  userWith: string,
  token: string
) => {
  return await fetch(`/chat/${user}/${userWith}`, {
    headers: {
      // Authorization: "Bearer ",
      Authorization: "Bearer " + token,
      // "Content-Type": "application/json",
    },
    method: "GET",
    credentials: "include",
  })
}

export const getMessages = () => {}

export const getSearch = async (data: string) => {
  const response = await fetch(`/search/${data}`)
  return response.json()
}

export const createChat = async (owner: string, name: string) => {
  await fetch(`/chat/${owner}/${name}`, {
    method: "POST",
  })
}

export const createSala = async (room: string) => {
  console.log("asdsd", room)
  const response = await fetch(`/rooms/${room}`)
}
