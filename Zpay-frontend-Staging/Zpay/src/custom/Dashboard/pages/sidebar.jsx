import SideBarComp from "../components/SideBar"
import {
    LifeBuoy,Receipt,Boxes,Package,UserCircle,BarChart3,LayoutDashboard,Settings
} from "lucide-react"

import { SidebarItem } from "../components/SideBar"

const SideBar=()=>{
    return(
        <div>
            <SideBarComp>
                <SidebarItem icon={<BarChart3 size={20}/>} text="Statistics" active/>
                <SidebarItem icon={<UserCircle size={20}/>} text="Users"/>
                <SidebarItem icon={<Boxes size={20}/>} text="Inventory"/>
                <SidebarItem icon={<Package size={20}/>}text="Orders" alert/>
                <SidebarItem icon={<Receipt size={20}/>}text="Billings"/>
                <hr className="my-3"/>
                <SidebarItem icon={<Settings size={20}/>}text="Settings"/>
                <SidebarItem icon={<LifeBuoy size={20}/>}text="Help"/>
            </SideBarComp>
            
        </div>
    )
}

export default SideBar;