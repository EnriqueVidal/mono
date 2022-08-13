import { ImgHTMLAttributes, DetailedHTMLProps } from 'react'
import styled from 'styled-components'

export interface ProfileProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  maxWidth?: string
}

const ProfilePic = styled.img<ProfileProps>`
  border-radius: 50%;
  object-fit: cover;
  height: ${(props) => props.maxWidth || 'auto'};
  width: ${(props) => props.maxWidth || 'auto'};
`

export default ProfilePic
