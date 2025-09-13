import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* search bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-500 px-2 ">
        <Image src="/search.png" alt="search" height={14} width={14} />
        <input
          type="text"
          placeholder="search"
          className="w-[200px] bg-transparent p-2 outline-none"
        />
      </div>

      {/* icons and user */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full h-7 w-7 flex items-center justify-center cursor-pointer">
          <Image src={"/message.png"} alt="message" height={20} width={20} />
        </div>
        <div className="relative bg-white rounded-full h-7 w-7 flex items-center justify-center cursor-pointer">
          <Image
            src={"/announcement.png"}
            alt="message"
            height={20}
            width={20}
          />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center rounded-full text-xs bg-purple-500 text-white">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src={"/avatar.png"}
          alt="user"
          height={36}
          width={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
