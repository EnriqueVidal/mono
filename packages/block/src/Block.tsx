import { PropsWithChildren } from 'react'

export type BlockProps = PropsWithChildren<{
  className?: string
  omitWrapper?: boolean
  title?: string
}>

export default function Block({
  children,
  className,
  omitWrapper = false,
  title,
}: BlockProps): JSX.Element {
  return (
    <div className={className}>
      {title && <h2>{title}</h2>}
      {omitWrapper ? children : <div>{children}</div>}
    </div>
  )
}
