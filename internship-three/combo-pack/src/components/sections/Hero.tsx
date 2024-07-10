import Typewriter from "../mini-components/Typewriter"
import TextGenerate from "../mini-components/TextGenerate"
import Flip from "../mini-components/Flip"
import Grid from "../mini-components/Grid"

export default function Hero(){
    return(
        <section className="flex justify-start">
        <Grid />
           <div className="flex flex-col gap-5 absolute">
               <div className="flex flex-col items-start gap-3">               
                 <TextGenerate />
                 <h1 className="text-purple-600 text-7xl font-semibold">Data Engineering</h1>
                 <Typewriter />
                </div>
                <p className="text-[#8A90A2]">
                    Kickstart your career in Data Engineering with 4 Course Combo Package <br />
                    Start by learning the core foundation of Python and SQL for Data Engineering by building End-To-End Spotify Data Pipeline Project on AWS and <br /> building a Data Model then build a core foundation by learning Data Warehouse with Snowflake and Apache Spark with Databricks. <br />
                </p>
                <Flip />
           </div>
        </section>
        )
}
