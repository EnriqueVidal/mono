import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export type ProfileProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export default function Profile(props: ProfileProps): JSX.Element {
  return <img {...props} />;
}
