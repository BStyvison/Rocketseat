import React from 'react'
import styles from './Avatar.module.css'

interface avatarProps {
  hasBorder?: boolean;
  src: string;
  alt?: string;
}

export const Avatar = ({hasBorder = true, src, alt}: avatarProps) => {
  return (
    <div>
      <img
          className={hasBorder ? styles.avatarWithBorder : styles.avatar}
          src={src}
          alt={alt}
        />
    </div>
  )
}
