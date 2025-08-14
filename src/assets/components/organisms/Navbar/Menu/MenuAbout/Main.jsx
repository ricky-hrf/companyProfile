const MenuAbout = () => {
  return (
    <div className="hidden md:flex items-center">
      <div className="relative group">
        <div className="py-4 px-2">
          <span className="text-amber-950 font-semibold cursor-pointer p-2 rounded-md">Tentang Kami</span>
        </div>
        <div className="absolute z-10 hidden group-hover:block bg-orange-50 shadow-lg rounded-md mt-0 ml-4 w-75">
          <div className="block px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 rounded-t-md transition-all duration-200 ease-in-out cursor-pointer">
            <span className="font-semibold">Sekilas lorem ipsum</span>
          </div>
          <div className="block px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 transition-all duration-200 ease-in-out cursor-pointer">
            <span className="font-semibold">Sejarah</span>
          </div>
                  <div className="block px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 transition-all duration-200 ease-in-out cursor-pointer">
                      <span className="font-semibold">Visi & Misi</span>
                  </div>
                  <div className="block px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 transition-all duration-200 ease-in-out cursor-pointer">
                      <span className="font-semibold">Struktur Organisasi</span>
                  </div>
                  <div className="block px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 transition-all duration-200 ease-in-out cursor-pointer">
                      <span className="font-semibold">Dewan Direksi</span>
                  </div>
                  <div className="block px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 rounded-b-md transition-all duration-200 ease-in-out cursor-pointer">
                    <span className="font-semibold">Dewan Komisaris</span>
                    </div>
                </div>
              </div>
            </div>
  );
}
export default MenuAbout;