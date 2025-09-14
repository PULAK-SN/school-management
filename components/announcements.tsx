const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-skyLight p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
            <span className="text-xs rounded-md text-gray-400 px-1 py-1 bg-white">
              2025-01-05
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
            rerum molestias, ut quis cum quae veniam quisquam sed eum sequi!
          </p>
        </div>

        <div className="bg-purpleLight p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
            <span className="text-xs rounded-md text-gray-400 px-1 py-1 bg-white">
              2025-01-05
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
            rerum molestias, ut quis cum quae veniam quisquam sed eum sequi!
          </p>
        </div>

        <div className="bg-yellowLight p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
            <span className="text-xs rounded-md text-gray-400 px-1 py-1 bg-white">
              2025-01-05
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
            rerum molestias, ut quis cum quae veniam quisquam sed eum sequi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
