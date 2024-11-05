export default function Home() {
  return (
    <main className="bg-gray-300 h-screen flex items-center justify-center p-5 sm:bg-red-100 md:bg-green-100 lg:bg-cy-100 xl:bg-orange-100 2xl:bg-purple-100">
      <div className="bg-white shadow-lg p-5 rounded-2xl w-full max-w-screen-sm flex flex-col md:flex-row gap-2">
        <input
          className="w-full rounded-full h-12 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow placeholder:text-blue-500 invalid:focus:ring-red-500 peer"
          type="email"
          required
          placeholder="Search here..."
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block">
          Email is required.
        </span>
        <button className="text-white py-2 rounded-full active:scale-90 transition-transform font-medium focus:scale-90 outline-none md:px-8 bg-black">
          Search
        </button>
      </div>
    </main>
  );
}
