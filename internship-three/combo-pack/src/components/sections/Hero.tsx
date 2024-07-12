import Typewriter from "../mini-components/Typewriter";
import Flip from "../mini-components/Flip";
import Button from "../common/Button";
import Grid from "../mini-components/Grid";

export default function Hero() {
  return (
    <section className="flex justify-center h-[35rem] px-4 md:px-0">
      <Grid />
      <div className="flex flex-col gap-5 absolute items-center py-10">
        <div className="flex flex-col items-center md:items-start gap-3">
          <h1 className={"font-semibold text-3xl md:text-5xl text-center w-full text-white"}>
            Zero to Hero
          </h1>
          <h1 className="text-purple-600 text-4xl md:text-7xl font-semibold">Data Engineering</h1>
          <Typewriter />
        </div>
        <p className={"text-center text-[0.65rem] md:text-base text-[#8A90A2]"}>
          Kickstart your career in Data Engineering with 4 Course Combo Package <br />
          Start by learning the core foundation of Python and SQL for Data Engineering by building End-To-End Spotify Data Pipeline Project on AWS and <br /> building a Data Model then build a core foundation by learning Data Warehouse with Snowflake and Apache Spark with Databricks. <br />
        </p>
        <Flip />
        <Button content="Buy Now" className="w-[120px] md:w-[150px]" />
      </div>
    </section>
  );
}
