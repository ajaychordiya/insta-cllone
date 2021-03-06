import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  let img: string = session?.user?.image || "";

  const handleSignin = (e: any) => {
    e.preventDefault();
    signIn();
  };
  const handleSignout = (e: any) => {
    e.preventDefault();
    signOut();
  };

  console.log(session);
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between bg-white max-w-6xl cursor-pointer mx-5 lg:mx-auto">
        <div className="relative hidden lg:inline-grid w-24">
          <Image src="https://links.papareact.com/ocw" layout="fill" />
        </div>
        <div className="relative w-10 h-10 mt-2 lg:hidden flex-shrink-0 cursor-pointer ">
          <Image src="/insta.png" layout="fill" />
        </div>

        <div className="max-w-x5">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 py-2 sm:text-sm border-gray-500 focus:ring-black focus:border-black rounded-md "
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="w-6 md:hidden cursor-pointer" />

          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex item-center justify-center animate-pulse text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                src={img}
                className="h-10 w-10 rounded-full"
                onClick={handleSignout}
              />
            </>
          ) : (
            <button onClick={handleSignin}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
