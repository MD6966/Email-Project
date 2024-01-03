import { Box, Skeleton } from '@mui/material'
import React from 'react'

const SkeletonComponent = () => {
  return (
    <div>
        <Box sx={{display:'flex', alignItems:'center'}}>
      <Skeleton animation="wave" variant="circular" width={60} height={60} />
      <Skeleton animation="wave" variant="text" width={340} height={80} sx={{ml:1}} />
        </Box>
      <Skeleton animation="wave" variant="text" width={410} height={440} sx={{mt:-10}} />

      
    </div>
  )
}

export default SkeletonComponent
