import Navbar from "../organisms/Navbar/main";

const homePage = () => {
  return (
    <div className="bg-orange-50">
      <div className="h-screen bg-[url(../public/background.jpg)] bg-cover bg-center w-full">
      <Navbar />
      </div>
      <div className="min-h-screen bg-orange-50 grid grid-cols-2">
        <div className="h-full">
        </div>
        <div className="h-screen p-6 flex flex-col gap-4 justify-center items-center ">
          <div className="p-6">
            <span className="text-orange-400 text-lg font-semibold mb-2">LOREM IPSUM</span>
            <h1 className="text-4xl text-orange-950 font-semibold mb-4">Lorem ipsum dolor sit amet consectetur.</h1>
            <p className="text-lg text-justify mt-4 text-orange-950">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia culpa exercitationem assumenda hic consectetur sunt labore sequi doloremque esse. Similique quia doloribus magni quasi voluptates possimus et reprehenderit, officiis veniam, ipsum est fugit facilis delectus dolore vitae, optio molestias consectetur. Dignissimos voluptatibus nobis perspiciatis maxime tempora dolor, iste quasi!</p>
          </div>
          <div className="border border-amber-400 hover:bg-orange-400 px-8 py-4 rounded-full transition duration-300 cursor-pointer ease-in-out text-amber-950 font-semibold hover:text-white">
            Selengkapnya
          </div>
        </div>
      </div>
    </div>
  )
}
export default homePage;