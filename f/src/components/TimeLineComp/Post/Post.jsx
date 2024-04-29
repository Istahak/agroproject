import React from 'react'
import './Post.css'
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
function Post() {
  return (
    <div className='post'>
        <div className='postHeader'>
            <PersonIcon className='head'/>
            <span className='head'>Rifat</span>
            <AccessTimeFilledIcon className='head'/>
            <span className='head'>12hr</span>
        </div>
        <div className='postText'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At nihil aut nesciunt dolore excepturi ab laudantium deserunt error doloremque minus, reprehenderit vitae velit cupiditate corrupti facere perferendis! Quibusdam, obcaecati ipsam.
        </div>
        <div className='postImage'>
            <img src='https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg' alt="No longer Available" />
        </div>
        <div className='postFooter'>
            <div className='materialButtons'>
                <ThumbUpOffAltIcon className='postButton'/>
                <CommentIcon className='postButton'/>
            </div>
            <span>Liked by 21 people</span>
        </div>
    </div>
  )
}

export default Post