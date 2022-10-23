import type { NextPage } from "next";

const Maintenance: NextPage<undefined> = (props: undefined) => (
  <div className="flex flex-col items-center justify-center h-screen text-center">
    <img src="images/gear.png" alt="Gear" className="w-20 h-20 gear"/>

    <h1 className="sm:text-4xl sm:mt-0 xs:text-2xl xs:mt-2 font-bold">https://davide.codes is currently under maintenance!</h1>

    <p className="sm:text-xl xs:text-md xs:px-4">We are probably working on improving the site at the moment. Come back and visit us later, we will come back soon. ⚡</p>

    <p className="sm:mt-10 xs:mt-5 xs:text-sm xs:px-4">
      If you want to know how the maintenance is going take a look at <a href="https://github.com/davi0k/davide.codes" target="_blank" rel="noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">https://github.com/davi0k/davide.codes</a> <img src="icons/github.svg" alt="GitHub" className="w-4 inline"/>
    </p>
  </div>
);

export default Maintenance;