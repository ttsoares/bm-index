import Image from "next/image";

import { TEXTS } from "../app/texts";

const HeReAs = () => {
  return (
    <div className="flex w-full flex-col mt-16 md:mt-20  lg:flex-row  lg:mt-32 bg-[#f8fcff] rounded-xl lg:w-[90%] lg:pb-36">
      <div className="w-full md:mb-3 lg:w-1/3 ">
        <div className="px-8 mt-10 md:px-0 md:mx-auto md:flex md:w-[90%] lg:flex-col ">
          <div className="h-20 md:mt-6 lg:mt-0 lg:w-1/3 lg:ml-6">
            <Image src="/icon-eating.svg" alt="eating" width={65} height={65} />
          </div>
          <div className="md:ml-8 md:pb-6 ">
            <h1 className="text-2xl mb-3 md:mt-2 lg:pr-0 lg:mt-4 font-semibold lg:mb-8">
              {TEXTS[2].title}
            </h1>
            <p className="pb-8 md:mt-6 md:mr-20 lg:mr-0 lg:mt-0">
              {TEXTS[2].content}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:mb-3 lg:w-1/3">
        <div className="px-8 md:mt-10 md:px-0 md:mx-auto md:flex md:w-[90%] lg:flex-col ">
          <div className="h-20 md:mt-6 lg:mt-0 lg:w-1/3 lg:ml-6">
            <Image
              src="/icon-exercise.svg"
              alt="exercise"
              width={65}
              height={65}
            />
          </div>
          <div className="md:ml-8 md:pb-6 ">
            <h1 className="text-2xl mb-3 md:mt-2 lg:pr-0 lg:mt-4 font-semibold lg:mb-8">
              {TEXTS[3].title}
            </h1>
            <p className="pb-8 md:mt-6 md:mr-20 lg:mr-0 lg:mt-0">
              {TEXTS[3].content}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:mb-3 lg:w-1/3">
        <div className="px-8 md:mt-10 md:px-0 md:mx-auto md:flex md:w-[90%] lg:flex-col ">
          <div className="h-20 md:mt-6 lg:mt-0 lg:w-1/3 lg:ml-6">
            <Image src="/icon-sleep.svg" alt="sleep" width={65} height={65} />
          </div>
          <div className="md:ml-8 md:pb-6 ">
            <h1 className="text-2xl mb-3 md:mt-2 lg:pr-0 lg:mt-4 font-semibold lg:mb-8">
              {TEXTS[4].title}
            </h1>
            <p className="pb-8 md:mt-6 md:mr-20 lg:mr-0 lg:mt-0">
              {TEXTS[4].content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeReAs;
