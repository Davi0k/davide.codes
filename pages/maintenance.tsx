import type { NextPage } from "next";

const Maintenance: NextPage<undefined> = (props: undefined) => (
  <div className="flex flex-col items-center justify-center h-screen text-center">
    <img src="images/gear.png" alt="Gear" className="w-20 h-20 gear"/>

    <h1 className="text-4xl font-bold mt-0">https://davide.codes is currently under maintenance!</h1>

    <p className="text-xl">We are probably working on improving the site at the moment. Come back and visit us later, we will come back soon. ⚡</p>

    <p className="mt-10">
      If you want to know how the maintenance is going take a look at <a href="https://github.com/davi0k/davide.codes" target="_blank" rel="noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">https://github.com/davi0k/davide.codes</a> <img src="icons/github.svg" alt="GitHub" className="w-4 inline"/>
    </p>
  </div>
);

export default Maintenance;