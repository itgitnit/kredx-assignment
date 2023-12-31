import Image from "next/image";

export default function FooterSection() {
    return (
        <>
            <div className="text-center text-5xl font-semibold bg-clip-text self-center mt-24 max-md:max-w-full max-md:text-4xl max-md:mt-10 bg-gradient-to-r from-[#239A99] to-[#4EB7E9] text-transparent">
                The KredX CMS Advantage
            </div>
            <div className="self-center w-full max-w-[1202px] mt-16 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
                        <div className="z-[1] flex grow flex-col items-stretch max-md:max-w-full">
                            <div className="flex-col fill-[linear-gradient(93deg,#093A71_22.59%,#1F9EA6_95.57%)] overflow-hidden relative flex min-h-[115px] w-full items-stretch justify-between gap-5 pl-8 pr-20 py-8 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                                <Image width={100} height={100}
                                    loading="lazy"
                                    src="/images/lastBg.png"
                                    className="absolute h-full w-full object-cover object-center inset-0"
                                />
                                <div className="relative text-white text-2xl font-semibold leading-9 grow shrink basis-auto max-md:max-w-full">
                                    Increase bottom line by reducing costs and increasing
                                    efficiency
                                </div>
                            </div>
                            <div className="shadow-lg bg-white flex items-stretch justify-between gap-5 mt-12 pl-7 pr-12 py-8 rounded-xl max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5">
                                <div className="text-neutral-600 text-2xl font-semibold leading-9 grow shrink basis-auto max-md:max-w-full">
                                    A tool for CFOs to analyze the cash flow and simulate what-if
                                    scenarios
                                    <br />
                                </div>
                                <Image width={100} height={100}
                                    loading="lazy"
                                    src="/images/arrowB.png"
                                    className="aspect-square object-contain object-center w-[23px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                            </div>
                            <div className="shadow-lg bg-white flex items-stretch justify-between gap-5 mt-14 pl-8 pr-14 py-8 rounded-xl max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5">
                                <div className="text-neutral-600 text-2xl font-semibold leading-9 grow shrink basis-auto max-md:max-w-full">
                                    Use integrated financing to fulfill cash flow gaps just in
                                    time
                                    <br />
                                </div>
                                <Image width={100} height={100}
                                    loading="lazy"
                                    src="/images/arrowB.png"
                                    className="aspect-square object-contain object-center w-[23px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="shadow-lg bg-teal-500 flex grow flex-col items-stretch w-full pl-14 pr-16 py-12 rounded-none max-md:max-w-full max-md:px-5">

                            <div className="flex justify-between gap-5 mt-8 items-start max-md:mt-10">
                                <Image width={100} height={100}
                                    loading="lazy"
                                    src="/images/rArrow.png"
                                    className="aspect-square object-contain object-center w-[19px] overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-white text-lg font-semibold leading-6 self-stretch grow shrink basis-auto">
                                    Automations to increase the efficiency in both AP and AR sides.
                                </div>
                            </div>
                            <div className="flex justify-between gap-5 mt-16 items-start max-md:mt-10">
                                <Image width={100} height={100}
                                    loading="lazy"
                                    src="/images/rArrow.png"
                                    className="aspect-square object-contain object-center w-[19px] overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-white text-lg font-semibold leading-6 self-stretch grow shrink basis-auto">
                                    On time follow-ups with customers enables quicker
                                    realization of revenues
                                </div>
                            </div>
                            <div className="flex justify-between gap-5 mt-16 items-start max-md:mt-10">
                                <Image width={100} height={100}
                                    loading="lazy"
                                    src="/images/rArrow.png"
                                    className="aspect-square object-contain object-center w-[19px] overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-white text-lg font-semibold leading-6 self-stretch grow shrink basis-auto">
                                    Tools like dynamic discounting to increase bottom line
                                </div>
                            </div>
                            <div className="flex justify-between gap-5 mt-14 items-start max-md:mt-10">
                                <Image width={100} height={100}
                                    loading="lazy"
                                    src="/images/rArrow.png"
                                    className="aspect-square object-contain object-center w-[19px] overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-white text-lg font-semibold leading-6 grow shrink basis-auto mt-1">
                                    Reduced human effort can be utilized to focus on increasing
                                    revenues
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-900 flex w-full flex-col justify-center items-center mt-28 px-16 py-9 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="flex w-full max-w-[1192px] justify-between gap-5 px-px items-start max-md:max-w-full max-md:flex-wrap">
                    <Image width={100} height={100}
                        loading="lazy"
                        src="/images/logoD.png"
                        className="aspect-[3.9] object-contain object-center w-[82px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="self-stretch flex items-stretch justify-between gap-5">
                        <Image width={100} height={100}
                            loading="lazy"
                            src="/images/insta.png"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                        <Image width={100} height={100}
                            loading="lazy"
                            src="/images/linkedin.png"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                        <Image width={100} height={100}
                            loading="lazy"
                            src="/images/facebook.png"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                        <Image width={100} height={100}
                            loading="lazy"
                            src="/images/twitter.png"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                        <Image width={100} height={100}
                            loading="lazy"
                            src="/images/youtube.png"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}