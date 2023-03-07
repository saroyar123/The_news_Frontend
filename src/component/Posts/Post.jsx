import { Avatar, Typography } from '@mui/material'
import React from 'react'

function Post({image,caption}) {
  return (
    <div>
        <Typography>{caption}</Typography>
        <Avatar
        src={image.url}
        alt='image of post'
        />
    </div>
  )
}

export default Post