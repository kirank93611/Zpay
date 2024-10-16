 import "./dash.css"

 export default function Dashboard() {
    return(
        <div className="flex w-full flex-col bg-white min-h-screen">
            <div className="w-full bg-white/80 sticky top-0 shadow-[0px_1px_2px_rgba(0,0,0,0.08),0px_0px_0px_1px_rgba(233,237,245,0.8)] background-blur-sm z-20">
                <div className="container-lg">
                    <div className="px-6 md:px-5 py-3 flex items-center justify-between gap-8">
                    <div className="flex items-center gap-3">
                        <div className="flex items-start gap-2 max-w-[-200px] w-full">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer md:block sm:block lg:hidden"><path d="M3 12H21M3 6H21M3 18H21" stroke="#121926" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <img src="https://avatars.githubusercontent.com/u/157960807?s=200&v=4" alt="logo" className="rounded max-h-[32px]"></img>
                        <span className="inline-flex items-center gap-1 pl-1.5 pr-1.5 pt-[1px] pb-[2px] text-xs leading-4 font-smaller tracking-[.01em] bg-[#e9edf5] text-[#5a6376] rounded-full  mb-2">Beta</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2.5">another</div>
                    </div> 
                </div>
            </div>
            <div className="container-lg flex-1">
                <div className="flex w-full h-full relative">
                <div className="hidden lg:block"></div>
                <div>
                    <div className="w-[232px] flex flex-col px-4 sticky top-0 mt-[-56px] h-screen pt-20 pb-6">
                        <ul className="flex flex-col gap-2 flex-1 overflow-y-auto mb-7">
                            <li>
                                <a className="group py-1.5 px-2 flex items-center gap-3 transition-all duration-300 button-b1 text-gray-500 hover:text-gray-1000 active:text-indigo-500 "  aria-current="page"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                <path className="hover:fill-gray-700 active:text-indigo-500" fillRule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clipRule="evenodd" /></svg>Home</a>
                            </li>
                        
                            <li>
                                <a className="text-gray-500 active:text-indigo-500 group py-1.5 px-2 flex items-center gap-3 transition-all duration-300 button-b1 hover:text-gray-1000"  aria-current="page"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
  <path  className="hover:fill-gray-700 active:text-indigo-500" fill-rule="evenodd" d="M1 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4Zm12 4a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM4 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm13-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM1.75 14.5a.75.75 0 0 0 0 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 0 0-1.5 0v.784a.272.272 0 0 1-.35.25A49.043 49.043 0 0 0 1.75 14.5Z" clip-rule="evenodd" /></svg></a></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto px-8 py-6 md:px-5">
                    <div className="flex-1 w-full transistion-all duration-500">
                        {/* first-element */}
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="header-h3 text-gray-1000">Today</h2>
                        <button type="button" className="_btn_3v0q4_1 _primary_3v0q4_38 _lg_3v0q4_26">
                        <span className="flex items-center justify-center" style={{width:"16px",height:"16px"}}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00004 3.33331V12.6666M3.33337 7.99998H12.6667" stroke="white" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"></path></svg></span>
                        <span>Create Payment</span>
                        </button>
                        
                    </div>

                    {/* second-element */}
                    <div className="grid grid-cols-3 sm:grid-cols-1 gap-4 mb-6">
                        <div className="mb-10">one</div>
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        )
}