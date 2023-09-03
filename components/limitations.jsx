import { TEXTS } from "../app/texts";

import Image from "next/image";

const Limitations = () => {
  return (
    <div className="flex flex-col mt-20 md:mt-0 items-center md:ml-8 lg:ml-0 h-52 w-full md:grid grid-cols-6  lg:w-[90%]">
      {/* Limitations of BMI */}
      <div className=" md:flex md:flex-col md:justify-start md:mb-20 col-span-6 lg:col-span-4">
        <div className="flex flex-col justify-center items-center lg:items-start lg:ml-12  ">
          <h1 className="text-center text-3xl lg:text-5xl font-semibold md:mb-2 lg:mb-2 ">
            {TEXTS[5].title}
          </h1>
          <p className="mb-20 px-7 md:px-0 md:mb-7 mt-6 text-center lg:text-left md:w-[70%]">
            {TEXTS[5].content}
          </p>
        </div>
      </div>
      {/* gender */}
      <div className="bg-white rounded-xl h-52 w-[85%] mb-5 md:mb-7 md:ml-10  col-span-6 md:col-span-3 lg:col-span-2 shadow-[0_10px_80px_rgba(8,_112,_184,_0.7)]">
        <div className="px-6 py-6 md:pr-4 flex flex-col justify-start">
          <div className="flex justify-start items-center mb-4">
            <Image src="/icon-gender.svg" alt="gender" width={30} height={30} />
            <h1 className="text-xl font-bold ml-5">{TEXTS[6].title}</h1>
          </div>
          <p>{TEXTS[6].content}</p>
        </div>
      </div>

      <div className="hidden lg:block mt-10 ml-10  col-span-2">
        <Image
          src="/pattern-curved-line-right.svg"
          alt="decoration"
          width={90}
          height={90}
          className="ml-48 -mt-52"
        />
      </div>
      {/* age */}
      <div className="bg-white rounded-xl h-52 w-[85%] mb-5 md:mb-7  col-span-6 md:col-span-3 lg:col-span-2 shadow-[0_10px_80px_rgba(8,_112,_184,_0.7)]">
        <div className="px-6 py-6 md:pr-4 flex flex-col justify-start">
          <div className="flex justify-start items-center mb-4">
            <Image src="/icon-age.svg" alt="age" width={30} height={30} />
            <h1 className="text-xl font-bold ml-5">{TEXTS[7].title}</h1>
          </div>
          <p>{TEXTS[7].content}</p>
        </div>
      </div>
      {/* muscle */}
      <div className="bg-white rounded-xl h-52 w-[85%] mb-5 md:mb-7 md:ml-10  col-span-6 md:col-span-3 lg:col-span-2 shadow-[0_10px_80px_rgba(8,_112,_184,_0.7)]">
        <div className="px-6 py-6 md:pr-4 flex flex-col justify-start">
          <div className="flex justify-start items-center mb-4">
            <Image src="/icon-muscle.svg" alt="gender" width={30} height={30} />
            <h1 className="text-xl font-bold ml-5">{TEXTS[8].title}</h1>
          </div>
          <p>{TEXTS[8].content}</p>
        </div>
      </div>
      <div className="hidden lg:block  col-span-1"></div>
      {/* pregnancy */}
      <div className="bg-white rounded-xl  h-60 md:h-52 w-[85%] mb-5 md:mb-7  col-span-6 md:col-span-3 lg:col-span-2 shadow-[0_10px_80px_rgba(8,_112,_184,_0.7)]">
        <div className="px-6 py-6 md:pr-4 flex flex-col justify-start">
          <div className="flex justify-start items-center mb-4">
            <Image
              src="/icon-pregnancy.svg"
              alt="pregnancy"
              width={30}
              height={30}
            />
            <h1 className="text-xl font-bold ml-5">{TEXTS[9].title}</h1>
          </div>
          <p>{TEXTS[9].content}</p>
        </div>
      </div>
      {/* GAP */}
      <div className="hidden md:block lg:hidden col-span-1"></div>
      {/* race */}
      <div className="bg-white rounded-xl h-60 md:h-52 w-[85%] md:w-[64%] mb-5 md:mb-7 md:ml-16  col-span-6 md:col-span-4 lg:col-span-2 shadow-[0_10px_80px_rgba(8,_112,_184,_0.7)]">
        <div className="px-[20px] py-6 md:pr-4 flex flex-col justify-start">
          <div className="flex justify-start items-center mb-4">
            <Image src="/icon-race.svg" alt="race" width={30} height={30} />
            <h1 className="text-xl font-bold ml-5">{TEXTS[10].title}</h1>
          </div>
          <p>{TEXTS[10].content}</p>
        </div>
      </div>
    </div>
  );
};

export default Limitations;
