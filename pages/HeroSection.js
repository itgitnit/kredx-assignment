export default function HeroSection() {
    return (
        <>
            <div className="flex-col overflow-hidden relative flex min-h-[806px] w-full justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
                <img
                    loading="lazy"
                    src="/images/background.png"
                    className="absolute h-full w-full object-cover object-center inset-0"
                />
                <div className="relative flex w-full max-w-[1198px] flex-col mb-32 items-start max-md:max-w-full max-md:mb-10">
                    <img
                        loading="lazy"
                        src="/images/logo.png"
                        className="aspect-[4.18] object-contain object-center w-[334px] overflow-hidden max-w-full"
                    />
                    <div className="self-stretch mt-3 px-px max-md:max-w-full">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
                                <div className="flex grow flex-col mt-36 items-start max-md:max-w-full max-md:mt-10">
                                    <div className="text-white text-6xl font-semibold self-stretch max-md:max-w-full max-md:text-4xl">
                                        Automate Your Finance Function
                                    </div>
                                    <div className="text-white text-4xl font-bold capitalize self-stretch mt-12 max-md:max-w-full max-md:mt-10">
                                        WITHOUT Reworking Your ERP
                                    </div>
                                    <div className="text-white text-2xl font-semibold leading-[60px] whitespace-nowrap bg-teal-400 justify-center items-stretch mt-14 px-6 py-2 rounded-md max-md:mt-10 max-md:px-5">
                                        Learn more
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                                <img
                                    loading="lazy"
                                    src="/images/roboimg.png"
                                    className="aspect-[1.33] object-contain object-center w-full justify-center items-center overflow-hidden max-md:max-w-full max-md:mt-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="self-center flex justify-between gap-5 mt-24 mx-80 px-5 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <img
                    loading="lazy"
                    src="/images/arrowOne.png"
                    className="aspect-[0.52] object-contain object-center w-[57px] overflow-hidden self-stretch shrink-0 max-w-full"
                />
                <div className="text-neutral-700 text-center text-2xl font-medium leading-8 grow shrink basis-auto mt-4 max-md:max-w-full">
                    Only KredX’s AP Solution lets you automate and streamline your entire
                    PO-to-Pay process without messing up your existing processes. That’s
                    because we support all native functionality for 40+ ERPs
                    <br />
                </div>
                <img
                    loading="lazy"
                    src="/images/arrowTwo.png"
                    className="aspect-[0.52] object-contain object-center w-[57px] overflow-hidden self-stretch shrink-0 max-w-full"
                />
            </div>
        </>
    )
}
