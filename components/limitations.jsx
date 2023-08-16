import { TEXTS } from "../app/texts";

import Image from "next/image";

const Limitations = () => {
  return (
    <div className="flex flex-col items-center w-full md:grid grid-cols-6 md:grid-rows-none  lg:grid-rows-3">
      {/* Limitations of BMI */}
      <div className=" md:flex md:flex-col md:justify-start md:mb-20 col-span-6 lg:col-span-4 ">
        <div className="flex flex-col justify-center items-center lg:px-20 lg:mt-10">
          <h1 className="text-center text-4xl font-bold md:mb-5 lg:mb-8 ">
            {TEXTS[5].title}
          </h1>
          <p className="w-[85%] mb-20 md:mb-7 mt-6 text-center lg:text-left">
            {TEXTS[5].content}
          </p>
        </div>
      </div>
      {/* gender */}
      <div className="bg-white rounded-xl w-[85%] mb-5 md:mb-7 md:ml-10 md:h-52 lg:h-80 col-span-6 md:col-span-3 lg:col-span-2 drop-shadow-xl">
        <div className="px-6 pb-6 md:px-20 mt-10 flex flex-col justify-start">
          <div className="flex justify-start items-center mb-4">
            <Image src="/icon_4.png" alt="gender" width={30} height={30} />
            <h1 className="text-xl font-bold ml-5">{TEXTS[6].title}</h1>
          </div>
          <p>{TEXTS[6].content}</p>
        </div>
      </div>

      <div className="hidden md:h-52 lg:mt-10 lg:ml-10 lg:block  lg:h-80 lg:col-span-2">
        <Image
          src="/line-lefth.png"
          alt="decoration"
          width={400}
          height={400}
          className="ml-32 -mt-24"
        />
      </div>
      {/* age */}
      <div className="bg-white rounded-xl w-[85%] mb-5 md:mb-7 md:h-52 lg:h-80 col-span-6 md:col-span-3 lg:col-span-2 drop-shadow-xl">
        <div className="px-6 pb-6 md:px-20 mt-10 flex flex-col justify-start">
          <div className="flex justify-start items-center mb-4">
            <Image src="/icon_5.png" alt="gender" width={30} height={30} />
            <h1 className="text-xl font-bold ml-5">{TEXTS[7].title}</h1>
          </div>
          <p>{TEXTS[7].content}</p>
        </div>
      </div>
      {/* muscle */}
      <div className="bg-white rounded-xl w-[85%] mb-5 md:mb-7 md:ml-10 md:h-52 lg:h-80 col-span-6 md:col-span-3 lg:col-span-2 drop-shadow-xl">
        <div className="px-6 pb-6 md:px-20 mt-10 flex flex-col justify-start">
          <div className="flex justify-start items-center mb-4">
            <Image src="/icon_6.png" alt="gender" width={30} height={30} />
            <h1 className="text-xl font-bold ml-5">{TEXTS[8].title}</h1>
          </div>
          <p>{TEXTS[8].content}</p>
        </div>
      </div>
      <div className="hidden lg:block md:h-52 lg:h-80 col-span-1"></div>
      {/* pregnancy */}
      <div className="bg-white rounded-xl w-[85%] mb-5 md:mb-7 md:h-52 lg:h-80 col-span-6 md:col-span-3 lg:col-span-2 drop-shadow-xl">
        <div className="px-6 pb-6 md:px-20 mt-10 flex flex-col justify-start">
          <div className="flex justify-start items-center mb-4">
            <Image src="/icon_7.png" alt="gender" width={30} height={30} />
            <h1 className="text-xl font-bold ml-5">{TEXTS[9].title}</h1>
          </div>
          <p>{TEXTS[9].content}</p>
        </div>
      </div>
      {/* GAP */}
      <div className="hidden md:block lg:hidden col-span-1"></div>
      {/* race */}
      <div className="bg-white rounded-xl w-[85%] mb-5 md:mb-7 md:ml-16 md:h-52 lg:h-80 col-span-6 md:col-span-4 lg:col-span-2 drop-shadow-xl">
        <div className="px-6 pb-6 md:px-20 mt-10 flex flex-col justify-start">
          <div className="flex justify-start items-center mb-4">
            <Image src="/icon_8.png" alt="gender" width={30} height={30} />
            <h1 className="text-xl font-bold ml-5">{TEXTS[10].title}</h1>
          </div>
          <p>{TEXTS[10].content}</p>
        </div>
      </div>
    </div>
  );
};

export default Limitations;
