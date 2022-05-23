import BarChart from "./barChart"
import LineChart from "./lineChart"

function DashboardContainer({ data }) {

    return (
        <div className="lg:flex flex-col  space-y-5 ">
            <div className=" sm:block md:flex lg:flex justify-between">
                <div className="  bg-success flex items-center p-6 rounded-xl text-white space-x-2 shadow-lg">

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>

                    <p>31 Clients</p>
                </div>
                <div className="  bg-error flex items-center p-6 rounded-xl text-white font-semibold space-x-2 shadow-lg">

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>

                    <p>3 Team member</p>
                </div>
                <div className="  bg-success flex items-center p-6 rounded-xl text-white space-x-2 shadow-lg">

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>

                    <p>1 Products</p>
                </div>
            </div>
            <div className="rounded-lg bg-slate-200">
                <BarChart />
            </div>
            <div className="rounded-lg bg-stone-200">

                <LineChart />
            </div>
        </div>

    )
}

export default DashboardContainer