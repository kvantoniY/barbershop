import React from 'react'
import style from './MyNotice.module.css'

const MyNotice = ({children, error}) => {
  return (
    <div className={error ? style.error : style.notice}>
        {children}
    </div>
  )
}

export default MyNotice