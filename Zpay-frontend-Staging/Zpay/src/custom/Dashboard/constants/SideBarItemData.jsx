import {BarChart3,UserCircle,Boxes,Package,Receipt,Settings,LifeBuoy} from "lucide-react";

const SidebarItemData = [
    { icon: <BarChart3 size={20} />, text: "Statistics", path: "/dashboard/analytics", active: true },
    { icon: <UserCircle size={20} />, text: "Users", path: "/dashboard/users" },
    { icon: <Boxes size={20} />, text: "Inventory", path: "/dashboard/inventory" },
    { icon: <Package size={20} />, text: "Orders", path: "/dashboard/orders", alert: true },
    { icon: <Receipt size={20} />, text: "Billings", path: "/dashboard/billings" },
    { icon: <Settings size={20} />, text: "Settings", path: "/dashboard/settings" },
    { icon: <LifeBuoy size={20} />, text: "Help", path: "/dashboard/help" },
  ];


  export default SidebarItemData;