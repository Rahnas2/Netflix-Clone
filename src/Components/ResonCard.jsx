


function ResonCard({ heading, ptext, svg }) {
    return (
        <div className="flex flex-col items-center justify-start relative rounded-xl max-w-72 h-70 min-h-64 bg-[linear-gradient(149deg,_#192247_0%,_#210e17_96.86%)] py-5 px-3 mb-2 xl:mb-0">
            <div className="w-full">
                <h1 className="text-xl font-nsans-bold text-white mb-4">{heading}</h1>
                <p className="text-sm font-nsans-regular text-[rgba(255,255,255,0.7)]">{ptext}</p>
            </div>

            <div className="absolute bottom-3 right-3">
                {svg}
            </div>
        </div>
    )
}

export default ResonCard