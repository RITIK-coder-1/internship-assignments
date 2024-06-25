// Quote by Mark Zuckerburg

export default function Quote() {
    return (
        <>
            {/* Main section container */}
            <section className="bg-[#1E293B] flex flex-col items-center justify-center gap-3 py-28 h-auto w-full">
                {/* Quotation mark */}
                <span className="text-center text-6xl text-white font-serif">&apos;&apos;</span>

                {/* Quote text */}
                <h2 className="text-center text-2xl text-white font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />  
                    Nulla facilisi. Curabitur vitae diam vitae sapien facilisis lacinia
                </h2>

                {/* Author and position */}
                <div className="flex gap-3 items-center justify-center text-[#94A3B8]">
                    <img src="/images/Consecture.png" alt="" className="rounded-full w-5 h-5" />
                    <span className="font-semibold">Mark Zuckerberg &nbsp;&nbsp;&nbsp;|</span>
                    <span>CEO, Facebook</span>
                </div>
            </section>
        </>
    );
}
