import React from 'react'
import image from '../images/image.jpg';
import OrderDetails from '../pages/OrderDetails';
function HomePage() {
  return (
        <div>
            <div className='w-2/12'><div><img src={image} alt="icon" className='mx-auto'/></div></div>
        
        <div>HomePage</div>
        <hr/>
        <div>-------------------------</div>
        <h1>1st</h1>
        <OrderDetails orderId="65f1888eca763954f8e1ca06" /> 
        
        <hr/>
        <div>-------------------------</div>
        <h1>2nd</h1>
        <hr/>
        <div>-------------------------</div>
        <h1>3rd</h1>
        <hr/>
        <div>-------------------------</div>
        <h1>4th</h1>
        <hr/>
        <div>-------------------------</div>
        <h1>5th</h1>
        <hr/>
        <div>-------------------------</div>
        </div>
        )
    }

export default HomePage;