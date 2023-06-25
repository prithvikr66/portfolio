import Link from 'next/link'
import React from 'react'

const Button = ({text,url}:{text:string,url:string}) => {
  return (
    <div>
        <Link href={url}>
        <button className='px-4 py-2 rounded-md text-textBlue text-[13px] border border-textBlue hover:bg-hoverColor duration-300'
        >{text}</button>
        </Link>
    </div>
  )
}

export default Button