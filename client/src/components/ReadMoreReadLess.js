import React, { useState } from "react";

function ReadMoreReadLess(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const textToShow = isExpanded ? props.text : props.text.substring(0, props.maxLength);

  return (
    <div>
      <p>{textToShow}</p>
      {props.text.length > props.maxLength ? (
        <button onClick={toggleIsExpanded}>
          {isExpanded ? "Read less" : "Read more"}
        </button>
      ) : null}
    </div>
  );
}

export default ReadMoreReadLess;























// import React, { useState } from "react";

// const ReadMoreReadLess = ({ text, maxWords }) => {
//   const [showFullText, setShowFullText] = useState(false);

//   const toggleShowFullText = () => {
//     setShowFullText(!showFullText);
//   };

//   const words = text.split(" ");
//   const summary = words.slice(0, maxWords).join(" ");

//   if (words.length <= maxWords) {
//     return <p>{text}</p>;
//   }

//   return (
//     <div>
//       <p>{showFullText ? text : `${summary}...`}</p>
//       <button onClick={toggleShowFullText}>
//         {showFullText ? "Read Less" : "Read More"}
//       </button>
//     </div>
//   );
// };

// export default ReadMoreReadLess;











































// import React, { useState } from 'react';


// const ReadMoreReadLess = () => {
// // Component 

// const [showMore, setShowMore] = useState(false);
        
// const text =  'CaPay is a super application that includes 68 high qualityscreens to help you launch digital wallet application projects and speed up your design process. Designed on 2 leading platforms Sketch & Figma makes it easy to customize to create impressive projects weee I am longer show more please CaPay is a super application that includes 68 high qualityscreens to help you launch digital wallet application projects and speed up your design process. Designed on 2 leading platforms Sketch & Figma makes it easy to customize to create impressive projects weee I am longer show more please';
        
         
//             // For Text that is shorter than desired length
//             if (text.length <= 258) return text;
//             // If text is longer than desired length & showMore is true
//             if (text.length > 258 && showMore) {
//               <>
//               <p>{text}</p>
    
//               <button
//                 onClick={() => setShowMore(false)}>
//                 Show Less
//               </button>
//             </>
      
//          // If text is longer than desired length & showMore is false
//         if (text.length > 258) {
//           return (
//             <>
//               <p>{text.slice(0, 258)}</p>
    
//               <button
//                 onClick={() => setShowMore(true)}>
//                 Show Full Description
//               </button>
//             </>
//           );
//         }
//       };
// //Then just call in component
// <p>Hyderabad</p>

//   };

// export default ReadMoreReadLess;

// // how make readmore and readless button in react with word limt?
// // const [showFullDescription, setFullDescription] = useState(false);


// // const showFullDescriptionHandler = () => {
// //     setFullDescription(!showFullDescription);
// //   };

// // const description = showFullDescription
// //     ? props.desc
// //     : props.desc.slice(0, 20);

// // <div className="col-md-7">
// //     <h2 className="featurette-heading">{props.title}</h2>
// //     <p className="lead">{description}</p>
// //     <button onClick={showFullDescriptionHandler}>
// //         Read {showFullDescription ? "Less" : "More"}
// //      </button>
// // </div>




// //Source: https://stackoverflow.com/questions/67253346







// // // Component 
// // const ReadMoreReadLess = () => {
// //     const [showContent, setShowContent] = useState(false);
// //     const maxWordLimit = 300;
    
  
// //     const handleReadMore = () => setShowContent(true);
// //     const handleReadLess = () => setShowContent(false);
  
// //     return (
// //       <div>
// //         {showContent ? (
// //           <>
// //             <p>About Thailand Holidays - There’s a reason why Thailand is such a popular vacation
// // destination. It’s exotic and affordable and it’s no wonder why so many people prefer to go on a Thailand Trip whenever they get a vacation. The good news is that with Thomas Cook India’s Thailand Holiday Packages, you’ll get a lot more than you bargained for. Don’t believe us? Just check the Thomas Cook website and you’ll be pleasantly surprised at the variety that’s on offer, both in terms of budget and duration of stay among the many Thailand Tour Packages. From 3 nights 4 days to as long as 10 nights 11 days, there’s the perfect Thailand Tour just for you on the Thomas Cook India website. Even budget-wise there’s a lot of flexibility with rates starting as low as INR 21200.00 to the more expensive holidays that go up to INR 167400.00 which is still quite reasonable, considering just how much you will get to see and experience during your Thailand Holiday.
// // The Thomas Cook India website is easy to navigate, and you’ll be happy to see that the tours have been designed by travel experts who love to travel too. Your Vacation to Thailand begins on the best possible note, right here, when you can see how much care is taken into curating these tours. Every aspect is taken care of beautifully, right from your meals to comfortable accommodation and helpful guides so that you get into vacation mode right away.

// // When you visit our website, you will come across a number of sections such as Things To Do In Thailand, Best Times To Visit Thailand, Places To Visit in Thailand under Thailand tourism which will help you make better plans for your holiday. Now, thanks to Thailand holiday packages being available from various major Indian cities such as Mumbai, Kolkata, Hyderabad, Bangalore, Chennai, Delhi, Ahmedabad, and Jaipur travelling to Thailand with Thomas Cook India is a piece of cake.

// // <h6>Most Popular Thailand Tour Packages</h6>

// // <table style={{ width: "100%", textAlign: "left" }}>
// //     <tr className='package-table'>
// //         <th>Thailand Tour Packages	</th>
// //         <th>No.of Nihts/Days</th>
// //         <th>Price*</th>
// //     </tr>
// //     <tr className='package-table' >
// //         <td>Thailand - Pattaya And Bangkok - Buy 1 Get 1 Free	</td>
// //         <td>4 Nights / 5 Days</td>
// //         <td>Rs 30 047</td>
// //     </tr>
// //     <tr className='package-table' >
// //         <td>Simply Thailand 5N/6D - Flight Inclusive		</td>
// //         <td>5 Nights / 6 Days</td>
// //         <td>Rs 43 378</td>
// //     </tr>
// //     <tr className='package-table' >
// //         <td>Simply Krabi And Phuket - Flights Inclusive		</td>
// //         <td>5 Nights / 6 Days</td>
// //         <td>Rs 54 264</td>
// //     </tr>
// //     <tr className='package-table' >
// //         <td>Thai Getaway (Summer 2023)		</td>
// //         <td>4 Nights / 5 Days</td>
// //         <td>Rs 56 103</td>
// //     </tr>
// //     <tr className='package-table' >
// //         <td>Asia Just For You (Summer 2023)	</td>
// //         <td>10 Nights / 11 Days</td>
// //         <td>Rs 1 37 820</td>
// //     </tr>
// // </table></p>

// //             <button onClick={handleReadLess}>Read Less</button>
// //           </>
// //         ) : (
// //           <button onClick={handleReadMore}>Read More</button>
// //         )}
// //       </div>
// //     );
// //   };



