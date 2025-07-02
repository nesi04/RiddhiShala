import { Activity, Settings, Users } from "lucide-react"

export default function page(){
    const userType='Admin'
    return(
        <>
       <div className="flex flex-col">
        <div className="flex items-center justify-between md:px-50 pt-20 border-b-2 border-b-gray-200 ">
            <div className="flex gap-4 items-center justify-center">
                <div className="bg-gray-300 rounded-full w-20 h-20"></div>
                <div className="">
                    <h1 className="text-xl font-semibold">John Doe</h1>
                    <p>You are logged in as : {userType}</p>
                </div>
            </div>
            <div className="">
                <button className="w-40 rounded-lg bg-black text-white py-2">Logout</button>
            </div>
        </div>
        <div className="flex items-center justify-center gap-10 py-20 border-b-2 border-b-gray-200">
            <div className="flex items-center justify-center text-3xl font-semibold w-1/2">Dashboard Actions</div>
            <div className="flex flex-col w-1/2 items-center justify-center pb-20 gap-5 ">
                <div className="border-b-2 border-b-gray-400 flex  items-center pb-5 w-1/2 gap-5">
                    <button className="size-15 rounded-full bg-gray-300 items-center justify-center flex">
                        <Settings className="size-10"></Settings>
                    </button>
                    <p className="text-xl ">Go to settings</p>
                </div>
                <div className="border-b-2 border-b-gray-400 flex  items-center pb-5 w-1/2 gap-5">
                    <button className="size-15 rounded-full bg-gray-300 items-center justify-center flex">
                        <Activity className="size-10"></Activity>
                    </button>
                    <p className="text-xl ">View Activity Logs</p>
                </div>
                <div className="border-b-2 border-b-gray-400 flex  items-center pb-5 w-1/2 gap-5">
                    <button className="size-15 rounded-full bg-gray-300 items-center justify-center flex">
                        <Users className="size-10"></Users>
                    </button>
                    <p className="text-xl ">Manage Users</p>
                </div>
            </div>
        </div>
        <div className="border-b-2 border-b-gray-200 flex items-center justify-center">
            <div className="w-3/4 flex items-center justify-center p-40 my-20 bg-gray-300">Track your daily activities seamlessly</div>
        </div>
       </div>
        </>
    )
}