import React from 'react';

const Sheader = () => {
  return (
    <div  className='Sheader'>

<button className='vvbtn2'>
        <p>View All</p>
      </button>
      <div className='buttonABC'>
        {/* arrow */}
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>
      </div>
      
      <h1 className='Shead'>Saved Classs</h1>

      
    </div>
  )
}

export default Sheader;
