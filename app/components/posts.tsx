export default function RecentBlog() {
  return (
    <div className="py-20 lg:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Recent Blog</h2>
          <a href="#" className="text-sm font-semibold border-b-2 border-gray-300 hover:border-gray-900 transition pb-1">View All Posts</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <a href="#" className="block mb-4 overflow-hidden rounded-2xl">
              <img src="/images/post-1.jpg" alt="Post" className="w-full h-auto object-cover hover:scale-105 transition duration-300" />
            </a>
            <div>
              <h3 className="text-lg font-semibold mb-2"><a href="#">First Time Home Owner Ideas</a></h3>
              <div className="text-sm text-gray-500">
                <span>by <a href="#" className="font-medium text-gray-900">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
              </div>
            </div>
          </div>
          <div>
            <a href="#" className="block mb-4 overflow-hidden rounded-2xl">
              <img src="/images/post-2.jpg" alt="Post" className="w-full h-auto object-cover hover:scale-105 transition duration-300" />
            </a>
            <div>
              <h3 className="text-lg font-semibold mb-2"><a href="#">How To Keep Your Furniture Clean</a></h3>
              <div className="text-sm text-gray-500">
                <span>by <a href="#" className="font-medium text-gray-900">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
              </div>
            </div>
          </div>
          <div>
            <a href="#" className="block mb-4 overflow-hidden rounded-2xl">
              <img src="/images/post-3.jpg" alt="Post" className="w-full h-auto object-cover hover:scale-105 transition duration-300" />
            </a>
            <div>
              <h3 className="text-lg font-semibold mb-2"><a href="#">Small Space Furniture Apartment Ideas</a></h3>
              <div className="text-sm text-gray-500">
                <span>by <a href="#" className="font-medium text-gray-900">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}