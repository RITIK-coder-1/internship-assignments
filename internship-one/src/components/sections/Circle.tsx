import Heading from "../common/Heading"; // Imported the common heading component
import { FaDatabase, FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa"; // Imported icons from react icons

export default function Circle() {
  return (
    <> 
      <section className="py-20 bg-[#020817]">
        <Heading 
          headingContent="Master Integration Like A Pro" 
          paraContent1="Welcome to Nextbase Ultimate Landing Page: Your Gateway to Innovation. Discover the Future of" 
          paraContent2="Excellence and Elevate Your Experience." 
          buttonContent="&#9733;  Integration ->"
        />
        <div className="flex justify-center items-center w-full h-auto relative">
          {/* Outer circle */}
          <div className="text-white border border-dashed border-gray-800 rounded-full w-[400px] h-[400px] flex justify-center items-center relative">
            {/* Icons on the border of the outer circle */}
            <FaTwitter className="absolute left-0 top-[50%] transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full" />
            <FaFacebookF className="absolute right-0 top-[70%] transform -translate-x-1/2 translate-y-1/2 w-10 h-10 rounded-full" />

            {/* Inner circle */}
            <div className="text-white border border-dashed border-gray-800 rounded-full w-[200px] h-[200px] flex justify-center items-center relative">
              {/* Icons on the border of the inner circle */}
              <FaInstagram className="absolute top-0 left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full" />
              <FaGithub className="absolute bottom-0 left-[50%] transform -translate-x-1/2 translate-y-1/2 w-6 h-6 rounded-full" />

              {/* Icon at the center of the inner circle */}
              <FaDatabase className="w-[25%] h-[25%]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
