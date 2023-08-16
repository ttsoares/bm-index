import Image from "next/image";

import { TEXTS } from "../app/texts";

const HeReAs = () => {
  return (
    <div className="flex w-full flex-col mb-32 md:mt-20 md:pb-10 lg:flex-row  lg:mt-32 bg-[#ebf2f6] rounded-xl shadow-lg">
      <div className="w-full md:mb-3 lg:w-1/3">
        <div className="px-8 md:px-20 mt-10 md:flex md:w-[90%] lg:flex-col">
          <div className="h-20 w-20 lg:ml-6">
            <Image src="/icon_1.png" alt="eating" width={70} height={70} />
          </div>
          <div className="md:ml-8 md:pb-6 ">
            <h1 className="text-2xl mb-3 md:-mt-3 lg:mt-4 font-bold lg:mb-8">
              {TEXTS[2].title}
            </h1>
            <p className="pb-8">{TEXTS[2].content}</p>
          </div>
        </div>
      </div>

      <div className="w-full md:mb-3 lg:w-1/3">
        <div className="px-8 md:px-20 mt-10 md:flex md:w-[90%] lg:flex-col">
          <div className="h-20 w-20 lg:ml-6">
            <Image src="/icon_2.png" alt="eating" width={70} height={70} />
          </div>
          <div className="md:ml-8 md:pb-6 ">
            <h1 className="text-2xl mb-3 md:-mt-3 lg:mt-4 font-bold lg:mb-8">
              {TEXTS[3].title}
            </h1>
            <p className="pb-8">{TEXTS[3].content}</p>
          </div>
        </div>
      </div>

      <div className="w-full md:mb-3 lg:w-1/3">
        <div className="px-8 md:px-20 mt-10 md:flex md:w-[90%] lg:flex-col">
          <div className="h-20 w-20 lg:ml-6">
            <Image src="/icon_3.png" alt="eating" width={70} height={70} />
          </div>
          <div className="md:ml-8 md:pb-6 ">
            <h1 className="text-2xl mb-3 md:-mt-3 lg:mt-4 font-bold lg:mb-8">
              {TEXTS[4].title}
            </h1>
            <p className="pb-8">{TEXTS[4].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeReAs;
