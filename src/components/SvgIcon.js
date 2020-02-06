import React from 'react'

export default function SvgIcon(props) {

  const { size = 26, color, className, ...attr } = props

  const svgSize = {
    width: `${size}px`,
    height: `${size}px`,
  }

  return (
    <svg
      className={['icon', color, className].join(' ')}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...svgSize}
      {...attr}
    >
      {props.children}
    </svg>
  )
}
