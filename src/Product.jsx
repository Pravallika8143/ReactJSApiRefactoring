import React from 'react';

function Product(props) {
  return (
    <div>
        <li>
            <img src={props.a.image} style={{width:"200px",height:"200px"}} alt=""/>
            <h4>{props.a.title.slice(0,20)}</h4>
            <div>
                <i>Rs.{props.a.price}</i><br/>
                {props.a.rating.rate} 
                <i class="bi bi-star-fill"></i><br/>
            </div>
        </li>
    </div>
  )
}

export default Product