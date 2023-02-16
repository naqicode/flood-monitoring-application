import React from 'react';
import Maps from './sidePages/Maps';
import SearchBox from './sidePages/SearchBox';
import '../styles/PageTwoCss.css';








function PageTwo() {
  return (
    <div className='fullPage'>
      

      <div className='map'>
        <Maps />
      </div>

      <div className='searchBox'>
        <SearchBox />
      </div>

    </div>
  )
}

export default PageTwo
