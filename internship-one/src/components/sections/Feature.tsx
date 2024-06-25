/**
 * Feature component that shows all the features.
 * @returns {JSX.Element} Rendered JSX element for the header.
 */

import Heading from "../common/Heading" // Imported the Common Heading Component

export default function Feature() {
  return (
    <>
      {/* Main section container */}
      <section className="w-vw h-auto flex flex-col justify-center items-center py-20">
        
        {/* Header section with button, title, and description */}
        <Heading headingContent="Discover Next-Level Feature" paraContent1="Discover ultimate insights into cutting-edge advancements. Our next level" paraContent2="features guide reveal the essentials for staying ahead." buttonContent="&#9733;  Features ->"/>        
        {/* Features grid container */}
        <div className="w-5/6 h-auto flex flex-col gap-5">
          
          {/* First row of features */}
          <div className="w-full h-auto flex justify-center gap-5 flex-col md:flex-row">
            
            {/* Individual feature card */}
            <div className="border border-solid border-[#1E293B] w-42 flex flex-col rounded-xl pb-5">
              <img src="/images/save.png" alt="" className="w-full" />
              <span className="text-white font-semibold mt-5 ml-5 text-xl">Save your files</span>
              <p className="text-[#94A3B8] ml-5">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nulla facilisi. Curabitur <br /> vitae diam vitae sapien facilisis lacinia
              </p>
            </div>
            
            {/* Individual feature card */}
            <div className="border border-solid border-[#1E293B] w-42 flex flex-col rounded-xl pb-5">
              <img src="/images/Consecture.png" alt="" className="w-full" />
              <span className="text-white font-semibold mt-5 ml-5 text-xl">Sit Ament consectetur</span>
              <p className="text-[#94A3B8] ml-5">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nulla facilisi. Curabitur <br /> vitae diam vitae sapien facilisis lacinia
              </p>
            </div>
          </div>
          
          {/* Second row of features */}
          <div className="w-full h-auto flex flex-col md:flex-row justify-between gap-5">
            
            {/* Individual feature card */}
            <div className="border border-solid border-[#1E293B] w-42 flex flex-col rounded-xl pb-5">
              <img src="/images/Elit.png" alt="" className="w-full" />
              <span className="text-white font-semibold mt-5 ml-5 text-xl">Random Uf</span>
              <p className="text-[#94A3B8] ml-5">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nulla facilisi. Curabitur <br /> vitae diam vitae sapien facilisis lacinia
              </p>
            </div>
            
            {/* Individual feature card */}
            <div className="border border-solid border-[#1E293B] w-42 flex flex-col rounded-xl pb-5">
              <img src="/images/Tempor.png" alt="" className="w-full mb-8" />
              <span className="text-white font-semibold mt-5 ml-5 text-xl">Err Ele Level</span>
              <p className="text-[#94A3B8] ml-5">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nulla facilisi. Curabitur <br /> vitae diam vitae sapien facilisis lacinia
              </p>
            </div>
            
            {/* Individual feature card */}
            <div className="border border-solid border-[#1E293B] w-42 flex flex-col rounded-xl pb-5">
              <img src="/images/Magna.png" alt="" className="w-full" />
              <span className="text-white font-semibold mt-5 ml-5 text-xl">Magan Elequa</span>
              <p className="text-[#94A3B8] ml-5">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nulla facilisi. Curabitur <br /> vitae diam vitae sapien facilisis lacinia
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
