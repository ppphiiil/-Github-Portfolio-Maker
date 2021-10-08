import React from 'react'
import styled from 'styled-components'
import { Button, Input } from 'antd'

const Avatar = styled.div`
  border-radius: 100%;
  width: 100px;
  height: 100px;
  overflow: hidden;
  text-align: center;
`

const Container = styled.div`
  width: 50%;
  margin: 50px auto;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export default function Profile ({ ownerData }) {
  // Example data
  // const ownerData = {
  // avatar_url: "https://avatars.githubusercontent.com/u/8368179?v=4"
  // bio: null
  // company: null
  // email: "bilianavaleva@gmail.com"
  // githubApi_url: "https://api.github.com/users/Bilie"
  // github_url: "https://github.com/Bilie"
  // hirable: undefined
  // id: 8368179
  // location: "Berlin"
  // name: "Biliana Valeva"
  // public_repos: 47
  // repos_url: "https://api.github.com/users/Bilie/repos"
  // twitter_username: null
  // }

  const {
    avatar_url,
    github_url,
    id,
    username,
    location,
    bio,
    company,
    name,
    email,
    public_repos
  } = ownerData
  //console.log( "ownerData", ownerData );
  console.log('PROPS=>', avatar_url, github_url, id, username)

  const ownerInfoElement = (
    <>
      <Avatar>
        <img style={{ width: '100%' }} src={avatar_url} alt={username} />
      </Avatar>
      {name ? <h2>{name}</h2> : null}
      <h4>{username}</h4>
      {bio ? <p>{bio}</p> : null}
      {email ? <p>Email: {email}</p> : null}
      <p>Public Repos: {public_repos}</p>
      {location ? <p>Location: {location}</p> : null}

      <Button type='primary' href={github_url}>
        Github Profile
      </Button>
    </>
  )

  return (
    <div>{ownerData ? <Container>{ownerInfoElement}</Container> : null}</div>
  )
}
