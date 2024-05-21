import React from 'react'

const Card = (props) => {
  return (
    <div className='resume__item'> 
<div className = 'resume__header'>
<h3 className='resume__subtitle'>{props.title}</h3> 

</div>
<div className='resume__content'>
<div className='resume__date-title'>
<h3 className = 'resume___title'>{props.subtitle}</h3>
<span className= 'resume__date text-cs'>{props.date}</span> </div>


<p className='resume__description'>{props.description}</p> 
</div>
</div>
  )
}

export default Card