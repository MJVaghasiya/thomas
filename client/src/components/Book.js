import React from 'react'

const Book = () => {
  return (
    <div>
      <div className='container'>
      <div className='book'>
        <form>
          <h2 className='book-h2'>I want to Holiday in and around</h2>
          <div className='book-dd-btn'>
            <textarea id="text-city" name="w3review" rows="4" cols="50" placeholder='Destination e.g. Europe/Theme e.g. Adventure'>
            </textarea>

            <label class="dropdown" style={{ left: "-32px", zIndex: "3" }}>

              <div class="dd-button" id='dd'>
                Budget per person
              </div>

              <input type="checkbox" class="dd-input" id="test" />

              <ul class="dd-menu" >
                <li>Action</li>
                <li>Another action</li>
                <li>Something else here</li>
                <li class="divider"></li>
                <li>
                  <a href="http://rane.io">Link to Rane.io</a>
                </li>
              </ul>

            </label>
            <label class="dropdown" style={{ marginLeft: "-32px" }}>

              <div class="dd-button" id='dd' style={{ borderRadius: "4px" }}>
                Month of travel
              </div>

              <input type="checkbox" class="dd-input" id="test" data-toggle="dropdown" />

              <ul class="dd-menu">
                <li>Action</li>
                <li>Another action</li>
                <li>Something else here</li>
                <li class="divider"></li>
                <li>
                  <a href="http://rane.io">Link to Rane.io</a>
                </li>
              </ul>

            </label>
            <input className='submit-btn' type="submit" value="search"></input>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Book