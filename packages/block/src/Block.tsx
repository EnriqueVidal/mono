import { createElement, PropsWithChildren } from 'react'

export type HeadingType = 'h1' | 'h2' | 'h3'

export type BlockProps = PropsWithChildren<{
  className?: string
  headingType?: HeadingType
  name?: string
  omitWrapper?: boolean
  title?: string
}>

export default function Block({
  children,
  className,
  headingType = 'h2',
  name,
  omitWrapper = false,
  title,
}: BlockProps): JSX.Element {
  return (
    <div className={className}>
      {title && createElement(headingType, { children: title })}
      {omitWrapper ? children : <div>{children}</div>}
    </div>
  )
}
