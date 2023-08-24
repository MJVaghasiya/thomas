// KindaCode.com
// src/App.js
import { useState } from 'react';


const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(10, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
  



// Main App
function Package() {
  return (
    <>
      <div className='container'>


        <div className='card'>
          <h1 className='packages'>Tours and Travel Agency – Thomas Cook India</h1>
          <p>
           
            <div className="container">
      <h2>
        <h className='po-left'  > Holiday is the first thing that comes to mind when we think of taking  a break from the monotony of life. A list of packages is shown below....</h>
        <ReadMore>
        

              <table style={{ width: "140%", marginTop: "20px" }}>
                <tr className='tr1'>
                  <th>List of holiday tour packaes</th>
                  <th>No. of Packages</th>
                  <th>Details</th>
                </tr>
                <tr className='tr2'>
                  <td className='td' >Andaman tour packages</td>
                  <td className='td'>33</td>
                  <td className='td'><a href='#' className='packages-read'>View andaman packages</a></td>
                </tr>
                <tr className='tr3'>
                  <td className='td'>Kerala Tour Packages</td>
                  <td className='td'>68</td>
                  <td className='td'><a href='#' className='packages-read'>View kerala packages</a></td>
                </tr>
                <tr className='tr4'>
                  <td className='td'>Himachal  tour packages</td>
                  <td className='td'>55</td>
                  <td className='td'><a href='#' className='packages-read'>View Himachal  packages</a></td>
                </tr>
                <tr className='tr5'>
                  <td className='td'>Kashmir tour packages</td>
                  <td className='td'>34</td>
                  <td className='td'><a href='#' className='packages-read'>View Kashmir packages</a></td>
                </tr>
                <tr className='tr6'>
                  <td className='td'>Europe tour packages</td>
                  <td className='td'>85</td>
                  <td className='td'><a href='#' className='packages-read'>View Europeandaman packages</a></td>
                </tr>
                <tr className='tr7'>
                  <td className='td'>Thailand tour packages</td>
                  <td className='td'>36</td>
                  <td className='td'><a href='#' className='packages-read'>View Thailand packages</a></td>
                </tr>
                <tr className='tr8'>
                  <td className='td'>Dubai tour packages</td>
                  <td className='td'>38</td>
                  <td className='td'><a href='#' className='packages-read'>View Dubaipackages</a></td>
                </tr>
                <tr className='tr9'>
                  <td className='td'>Singapore tour packages</td>
                  <td className='td'>44</td>
                  <td className='td'><a href='#' className='packages-read'>View Singapore packages</a></td>
                </tr>
                <tr>
                  <td className='td'>Mauritius tour packages</td>
                  <td className='td'>15</td>
                  <td className='td'><a href='#' className='packages-read'>View Mauritius packages</a></td>
                </tr>

              </table>
              <p className='td' style={{ marginTop: "30px", width:"138%",paddingRight:"0px" }}>
                Travel is all about indulging in experiences we often yearn for and tour packages offered by Thomas Cook can make your every travel episode and indulgence a once in a lifetime experience. We plan your tour so well that you need not worry about anything except for packing your luggage.
                <br />
                Holiday packages offered by Thomas Cook have been revered by customers for years. Our trips are not only well organized but also involve a variety of experiences and surprises. Some of the hot-selling destinations where customers love to travel with us are Thailand, Kashmir, Bali, Ladakh and Singapore.
                <br />
                Whether you are travelling with your friends, family or spouse, our best selling international package holidays such as Europe, Mauritius, Maldives and Hong Kong can make your holiday trip an out of the world experience. We have a plethora of options when it comes to choosing travel packages. And don’t worry if you wish to plan everything on your holiday your way, our customizable tour packages have your back. Our top selling India tour packages are no less. Everyone, including local and foreign tourists, dream to explore the serene beauty of Kashmir and rugged magnificence of Ladakh. Goa, Andaman and Kerala holidays are the all-time favorite and safe haven for travellers throughout the year. These are hands down the best places in India and our India tour packages will allow you indulge in the most desirable experiences at these places while making sure that you have made the most of your holiday trip. Since we believe in enhancing our customer’s experience every time they travel with us, we have curated special holidays for offbeat and niche travellers. Experiential holiday is the newest addition to our kitty of holiday tour packages. These travel packages cater to people who would love to go on road trips, self-drive getaways, indulge in adventure and luxury experiences. These trip packages are hand-picked by our experts and are sure to tour your holiday into an odyssey. We also have travel packages for all the upcoming and most joyously celebrated events in India and at your entire favorite International destinations too.
                <br />
                Thomas Cook is the leading tour & travel agency around the globe. Our team of experts strives to give you a sneak-peek into the world of travel & tourism for you to unleash the traveller in you. If you haven't travelled countries and tasted its uniqueness, are you really making the most of the beauty around the world? Hope to see you make memories soon!
              </p>
        </ReadMore>
      </h2>
    </div>
          </p>
        </div>
      </div>
    </>
  );
}

export default Package;