import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4  ">
        <a href="../" className="flex items-center space-x-3 rtl:space-x-reverse ">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC46GFDH-23qDLaZIe0A5DM6Bdnyn81G0NXg&s"
            className="h-8 w-9  "
            alt="Logo"
            height={1000}
            width={1000}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#5f6368] max-sm:text-xl ">
            <span className="text-black">NEO</span> MEET
          </span>
         
        </a>
        
      </div>
      <div className="w-20 h-5 flex mt-3 max-sm:w-[61px] ">
            <a href="https://github.com/SinghBanta/Video-Conferencing-App" target="_blank">
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqVLx1eZWBsj68Zlp7BhY3Y_yRy_YOKqMFw&s" alt="Github" width={300} height={300} />
            </a>
          </div>
    </nav>
  );
};

export default Navbar;
