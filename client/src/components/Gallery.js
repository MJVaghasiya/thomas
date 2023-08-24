import React from 'react'
import img1 from '../img/honeymoon-banner.jpg';
import img2 from '../img/thailand.jpg';
import img3 from '../img/singapore.jpg';
import img4 from '../img/egypt.jpg';
import img5 from '../img/vietnam.jpg';
import img6 from '../img/uttarkhand.jpg';
import { Link } from 'react-router-dom';




const Gallery = () => {
      return (
            <div>
                  <div class="container">
                  {/* 
                        <div class="row">
                              <div class="col-xs-12"><div class="row">

                              </div></div>

                              <div class="row">

                                    <div class="col-sm-4"><div class="margin-bottom-20">

                                          <div class="">

                                                <a href="/holidays/domestic-honeymoon-tour-packages" target="_blank">
                                                      <span>
                                                            <img src={img1} data-src="/images/site-banners/2023/honeymoon-tile-banner.jpg" class=" img-responsive  lazyImg" alt="  " title="   " />
                                                      </span>

                                                </a>
                                          </div>

                                    </div>
                                    </div><div class="col-sm-4"><div class="margin-bottom-20">

                                          <div class="">

                                                <a href="/holidays/international-tour-packages/thailand-tour-packages" target="_blank">
                                                      <span>
                                                            <img src={img2} data-src="/images/home-page-banners/2023/jan/thailand-title.jpg" class=" img-responsive  lazyImg" alt="Container 02" title="Container 02 " />
                                                      </span>

                                                </a>
                                          </div>

                                    </div>
                                    </div><div class="col-sm-4"><div class="margin-bottom-20">

                                          <div class="">

                                                <a href="/holidays/international-tour-packages/singapore-tour-packages" target="_blank">
                                                      <span>
                                                            <img src={img3} data-src="/images/site-banners/2022/singapore-tile1.jpg" class=" img-responsive  lazyImg" alt="" title=" " />
                                                      </span>

                                                </a>
                                          </div>

                                    </div>
                                    </div></div>

                              <div class="row">

                                    <div class="col-sm-4"><div class="margin-bottom-20">

                                          <div class="">

                                                <a href="/holidays/international-tour-packages/egypt-tour-packages" target="_blank">
                                                      <span>
                                                            <img src={img4}data-src="/images/site-banners/2022/egypt-tile1.jpg" class=" img-responsive  lazyImg" alt="" title=" " />
                                                      </span>

                                                </a>
                                          </div>

                                    </div>
                                    </div><div class="col-sm-4"><div class="margin-bottom-20">

                                          <div class="">

                                                <a href="/holidays/international-tour-packages/vietnam-tour-packages" target="_blank">
                                                      <span>
                                                            <img src={img5} data-src="/images/site-banners/2022/vietnam-tile1.jpg" class=" img-responsive  lazyImg" alt="" title=" " />
                                                      </span>

                                                </a>
                                          </div>

                                    </div>
                                    </div><div class="col-sm-4"><div class="margin-bottom-20">

                                          <div class="">

                                                <a href="/holidays/india-tour-packages/uttarakhand-tour-packages" target="_blank">
                                                      <span>
                                                            <img src={img6} data-src="/images/site-banners/2023/uttarkhand-tile-banner.jpg" class=" img-responsive  lazyImg" alt="" title=" " />
                                                      </span>

                                                </a>
                                          </div>

                                    </div>
                                    </div></div>

                        </div>
                  */}
                        </div>
      


























                  <div className='gallery'>
                        <div className='container z-ind-po '>

                              <div className='row ds-flx'  style={{ marginTop: "-75px", textAlign:"center" }}>
                                    <div className='col-lg-4 mrgn-btm'>
                                        <Link to='/HoneyMoonHome'> <img src={img1} /></Link>
                                    </div>
                                    <div className='col-lg-4 mrgn-btm'>

                                         <Link to="/Thailand"><img src={img2} /></Link>
                                    </div>
                                    <div className='col-lg-4 position-top mrgn-btm '>
                                        <Link to='/Singapore'>  <img src={img3} /></Link>
                                    </div>
                              </div>

                              <div className='row ds-flx' id='margin-tb-center'>
                                    <div className='col-lg-4 mrgn-btm'>
                                         <Link to='/Egypt'> <img src={img4} /></Link>      
                                    </div>
                                    <div className='col-lg-4 mrgn-btm'>
                                         <Link to='/Vietnam' ><img src={img5} /></Link>
                                    </div>
                                    <div className='col-lg-4  mrgn-btm'>
                                    <Link to='/Uttrakhand' >  <img src={img6} /></Link>
                                    </div>
                              </div>
                        </div>
                  </div>
      </div>
      )
}

export default Gallery

// i want to responsive navbar in html?


