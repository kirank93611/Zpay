

const DashboardAnalytics=()=>{
    return(
        <div className="">
        <div className="flex flex-col py-20 px-20 bg-green-600 rounded-lg border border-gray-200 shadow-md">
        
            <h1>hello</h1>
        
      </div>
        <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Analytics</h1>

      {/* Graph Metrics */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        {/* <canvas ref={chartRef} id="salesChart" width="400" height="200"></canvas> */}
      </div>

      {/* Card Components for Other Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Orders</h2>
          <p className="text-3xl font-bold">567</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Revenue</h2>
          <p className="text-3xl font-bold">$89,000</p>
        </div>
      </div>
    </div>
      </div>
    )
}

export default DashboardAnalytics;