import React from 'react'
import moment from 'moment'
const Article = ({ title, date, image }) => {
  return (
    <article className='post'>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>{moment(date).format('dddd Do, YYYY')}</span>
      </div>
      <p><img src={image}/></p>
    </article>
  )
}

export default Article
