import { ImgHTMLAttributes } from 'react'
import styled from 'styled-components'

export type ProfileProps = ImgHTMLAttributes<HTMLImageElement>

const ProfilePic = styled.img<ProfileProps>`
  border-radius: 50%;
`



export default function Profile(props: ProfileProps): JSX.Element {
  return <ProfilePic {...props} />
}
