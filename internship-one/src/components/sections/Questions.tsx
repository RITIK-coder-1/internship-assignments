'use client'; // As I am using react hooks, I have to include this

import React, { useState, useEffect } from "react"; // imported the useState and useEffect hooks
import Heading from "../common/Heading"; // imported the common heading component
import faqData from "../../data/faqData"; // imported the QnA data

// Questions component

export default function Questions() {
  const [openItems, setOpenItems] = useState<number[]>([]); // openItems will include the index number of the div elements that are opened at that time, its initial value is empty

  const toggleHidden = (index: number) => { // it is the function used to toggle the div elements from hidden to visible
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(item => item !== index)); // If the item is already opened, close this
    } else {
      setOpenItems([...openItems, index]); // If it is not opened, open it
    }
  };

  // If we have an initial state where some items should be open on load
  useEffect(() => {
    setOpenItems([]); // the dependency array is empty
  }, []);

  return (
    <section className="py-20 bg-[#020817]">
      {/* Common Heading */}
      <Heading
        buttonContent="? FAQ ->"
        headingContent="Frequently Asked Questions"
        paraContent1="Get detailed answers to common inquiries. Enhance your understanding of our offerings "
        paraContent2="and policies."
      />

      {/* Questions Data */}
      <div className="w-full h-auto flex items-center flex-col">
        {faqData.map((ele, index) => (
          <div key={index} className="w-[90%] md:w-[70%] h-auto text-white border-b border-solid border-gray-800 flex flex-col py-5">
            <div>
              <div
                className="flex justify-between w-full relative h-auto text-white z-10 text-2xl font-semibold cursor-pointer"
                onClick={() => toggleHidden(index)}> {/* On click of this div, it injects a div with the specific index within the openItems Array */}

                <span>{ele.question}</span> {/* Display the question */}

                {openItems.includes(index) ? 
                  <span>&uarr;</span> : <span>&darr;</span> 
                  /* If it is opened, show the upper arrow sign. If it is not opened, show the lower arrow sign */
                } 
              </div>

              <div className={openItems.includes(index) ? "visible" : "hidden"}> {/* only if it is not in the array, it will be visible */}
                <div className="w-[50%] h-auto text-white">
                  {ele.answer} {/* Display the answer */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
