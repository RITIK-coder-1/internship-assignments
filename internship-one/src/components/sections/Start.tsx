import Heading from "../common/Heading"; // Imported the common heading component
import Button from "../common/Button"; // Imported the common heading component

export default function Start(){
  return(
    <section className="flex flex-col justify-center items-center py-20 bg-[#020817]">
        <Heading buttonContent="Get Started ->" headingContent="Ready to move with Ultimate?" paraContent1="Get detailed answers to common inquiries. Enhance your understanding of our offerings " paraContent2="and policies."/>
        <Button height="40px" width="140px" bgColor="white" content="Get started" radius="5px"/>
    </section>
    )
}