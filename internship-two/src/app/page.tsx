import Hero from "../components/sections/Hero"
import Followers from "../components/sections/Followers/Followers"
import Card from "../components/common/3dCard/Card"
import Carousel from "../components/common/3dCard/Carousel"

export default function Home() {
  return(
    <>
        <Hero />
        <Followers />
        <Card title="Why We&apos;re Your" heading1="Best Code Learning" heading2="Choice?" paragraph1="Choose CodeHelp for an unparalleled coding experience." color="#EF476F" glowColor="rgba(5, 52, 75, 0.6)" borderColor="#1095E7" reverse={false}/>
        <Card title="Who Are We" heading1="Empowering Coders," heading2="Enabling Dreams" paragraph1="Unveil the essence of CodeHelp: a community-driven" paragraph2="platform dedicated to empowering coders of all levels." paragraph3="Discover who we are and how we&apos;re shaping the future of coding education." color="#22BD59" glowColor="rgba(14, 65, 30, 0.6)" borderColor="#24BF5A" reverse={true}/>
    </>
    )
}
