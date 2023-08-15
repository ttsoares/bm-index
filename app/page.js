"use client";

import { useState } from "react";

import { TEXTS } from "./texts";

import Image from "next/image";
import { useForm } from "react-hook-form";

//-------------------------------
export default function Home() {
  const form = useForm({
    mode: "onChange",
    defaultValues: {
      weight: "",
      height: "",
      measures: "",
    },
  });

  const [render, setRender] = useState(false);

  const { register, resetField, watch, onChange, setValue, getValues } = form;

  let calcBMI = 0;

  let measureSystem = watch("measures");
  let enteredWeight = watch("weight");
  let enteredHeight = watch("height");

  function changeSystem(data) {
    if ((enteredHeight !== "") & (enteredWeight !== "")) {
      if (data.target.value === "metric") {
        // imperial --> IS
        setValue("height", (Number(enteredHeight) * 30.48).toFixed(2));
        setValue("weight", (Number(enteredWeight) * 0.453592).toFixed(2));
      } else {
        // IS --> imperial
        setValue("height", (Number(enteredHeight) * 0.0328084).toFixed(2));
        setValue("weight", (Number(enteredWeight) * 2.20462).toFixed(2));
      }

      // enteredHeight = getValues("height");
      // enteredWeight = getValues("weight");
      // setRender(!render);
    }
  }

  function weightIdeal() {
    let weightLow = 0;
    let weightHight = 0;

    // Convertion factor from lb/in² to lb/ft²
    const CONVERTION = 4.8818;
    const MinBMI = 18.5;
    const MaxBMI = 24.9;
    const CentToMeter = 100;

    if (measureSystem === "metric") {
      weightLow = (
        MinBMI * Math.pow(Number(getValues("height")) / CentToMeter, 2)
      ).toFixed(2);
      weightHight = (
        MaxBMI * Math.pow(Number(getValues("height")) / CentToMeter, 2)
      ).toFixed(2);
      return (
        <span>
          {weightLow}Kg and {weightHight}Kg
        </span>
      );
    } else {
      weightLow = (
        (MinBMI * Math.pow(Number(getValues("height")), 2)) /
        CONVERTION
      ).toFixed(2);
      weightHight = (
        (MaxBMI * Math.pow(Number(getValues("height")), 2)) /
        CONVERTION
      ).toFixed(2);
      return (
        <span>
          {weightLow}lb and {weightHight}lb
        </span>
      );
    }
  }

  return (
    <main className="flex min-h-screen w-screen flex-col justify-center items-center bg-neutral-400 lg:px-9">
      <div className="z-10 flex flex-col md:justify-center lg:flex-row w-full ">
        <div
          className="flex flex-col items-center justify-center h-[400px]
        md:w-full md:items-center
        lg:items-start lg:p-8 w-full lg:w-1/2  lg:h-[640px] lg:border-0"
        >
          <div className="md:h-14 md:w-14 mb-10">
            <Image
              src="/logo.png"
              alt="logo"
              width={70}
              height={70}
              className="lg:mb-0"
            />
          </div>
          <div className="hidden lg:block w-full h-9"></div>
          <div className="lg:mt-20  md:flex md:flex-col md:justify-center items-center">
            <h1 className="text-5xl lg:text-6xl font-bold lg:mb-8 text-center lg:text-start">
              {TEXTS[0].title}
            </h1>
            <p className="w-3/4  md:mt-8 md:text-center lg:text-start lg:w-3/4 lg:p-8">
              {TEXTS[0].content}
            </p>
          </div>
        </div>
        <div className="w-full flex items-center md:justify-center lg:w-1/2 mt-8 lg:mt-6 lg:h-[640px]">
          <div className="md:w-[95%] lg:w-[80%] lg:mt-16 h-96 rounded-xl bg-white p-6">
            <h2 className="text-xl font-bold mb-5">
              Enter your details bellow
            </h2>
            <form>
              <div className="flex w-full justify-between">
                <div className="mb-5 flex w-full justify-center">
                  <div className="w-2/3 lg:ml-3">
                    <input
                      type="radio"
                      defaultChecked={true}
                      name="measures"
                      value="metric"
                      id="metric"
                      {...register("measures", { onChange: changeSystem })}
                      className="ring-2 ring-gray-400"
                    />
                    <label className="ml-4" htmlFor="metric">
                      Metric
                    </label>
                  </div>

                  <div className="w-2/3">
                    <input
                      type="radio"
                      name="measures"
                      value="imperial"
                      id="imperial"
                      {...register("measures", { onChange: changeSystem })}
                      className="ml-3 ring-2 ring-gray-400"
                    />
                    <label className="ml-4" htmlFor="medium">
                      Imperial
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-1/2">
                  <label htmlFor="height" className="block text-sm lg:ml-3">
                    Height
                  </label>
                  <div className="flex items-center justify-between w-11/12 m-3 border-2 border-gray-300 rounded-lg">
                    <input
                      type="text"
                      id="height"
                      placeholder="0"
                      {...register("height")}
                      className="ml-2 text-xl font-bold text-gray-400 py-5 w-3/4  h-4 border-gray-300 focus:ring-3 focus:ring-blue-300"
                    />
                    {measureSystem && (
                      <p className="font-bold text-blue-700 text-2xl mr-2">
                        {measureSystem === "imperial" ? "ft" : "cm"}
                      </p>
                    )}
                  </div>
                </div>
                <div className=" w-1/2">
                  <label htmlFor="weight" className="block text-sm lg:ml-3">
                    Weight
                  </label>
                  <div className="flex items-center justify-between w-11/12 m-3 border-2 border-gray-300 rounded-lg">
                    <input
                      type="text"
                      id="weight"
                      placeholder="0"
                      {...register("weight")}
                      className="ml-2 text-xl font-bold text-gray-400 py-5 w-3/4 h-4 border-gray-300 focus:ring-3 focus:ring-blue-300"
                    />
                    {measureSystem && (
                      <p className="font-bold text-blue-700 text-2xl mr-2">
                        {measureSystem === "imperial" ? "lb" : "kg"}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-center w-full h-40 bg-gradient-to-r from-[#365FF7] to-[#839eff] rounded-l-[15px] rounded-r-[100px]">
                {enteredHeight !== "0.00" &&
                enteredWeight !== "0.00" &&
                measureSystem &&
                enteredHeight !== "" &&
                enteredWeight !== "" ? (
                  <div className="text-white flex flex-col w-full justify-start items-start text-xl font-bold">
                    <div className="w-full ml-6">
                      <p className="mr-2">Your BMI is...</p>
                      <p className="text-4xl font-bold mt-2 ml-3">
                        {measureSystem === "metric" ? (
                          <span>
                            {
                              (calcBMI = (
                                Number(enteredWeight) /
                                Math.pow(Number(enteredHeight) / 100, 2)
                              ).toFixed(1))
                            }
                          </span>
                        ) : (
                          <span>
                            {
                              (calcBMI = (
                                Number(enteredWeight * 0.453592) /
                                Math.pow(Number(enteredHeight * 0.3048), 2)
                              ).toFixed(1))
                            }
                          </span>
                        )}
                      </p>
                    </div>
                    {calcBMI < 18.5 ? (
                      <p className="text-sm ml-6 mt-2">
                        Your BMI suggest you&apos;re too skinny. Your ideal
                        weight is between&nbsp;
                        {weightIdeal()}
                      </p>
                    ) : (
                      <></>
                    )}
                    {(calcBMI >= 18.5) & (calcBMI <= 24.9) ? (
                      <p className="text-sm ml-6 mt-2">
                        Your BMI suggest you&apos;re a healthy weight. Your
                        ideal weight is between&nbsp;
                        {weightIdeal()}
                      </p>
                    ) : (
                      <></>
                    )}
                    {calcBMI > 24.9 ? (
                      <p className="text-sm ml-6 mt-2">
                        Your BMI suggest you&apos;re over weighted. Your ideal
                        weight is between&nbsp;
                        {weightIdeal()}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                ) : (
                  <div className="p-2 ml-3 text-left text-white">
                    <h2 className="text-xl font-bold p-2 mt-2">Welcome!</h2>
                    <p className="p-2 text-xs">
                      Enter your height and weight so you&apos;ll see your BMI
                      result here.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 flex justify-center items-center mt-36">
          <Image
            src="/picture.jpg"
            width={500}
            height={500}
            alt="person"
            className="md:-ml-48"
          />
        </div>
        <div className="w-full md:w-1/2 h-[400px]">
          <Image
            src="/line-right.png"
            alt="decoration"
            width={300}
            height={300}
            className="hidden lg:block ml-96"
          />

          <div className="md:p-10 md:mt-36 lg:px-20 lg:mt-10 ">
            <h1 className="text-4xl font-bold lg:mb-8">{TEXTS[1].title}</h1>
            <p className="md:w-[80%] md:mt-10 lg:w-2/3">{TEXTS[1].content}</p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col lg:flex-row md:mt-20 lg:mt-32 mb-32">
        <div className="w-full md:mb-3 lg:w-1/3">
          <div className="px-20 mt-10 md:flex md:w-[90%]">
            <div className="h-20 w-20">
              <Image src="/icon_1.png" alt="eating" width={70} height={70} />
            </div>
            <div className="md:ml-8">
              <h1 className="text-2xl md:mb-3 md:-mt-3 lg:mt-8 font-bold lg:mb-8">
                {TEXTS[2].title}
              </h1>
              <p>{TEXTS[2].content}</p>
            </div>
          </div>
        </div>

        <div className="w-full md:mb-3 lg:w-1/3">
          <div className="px-20 mt-10 md:flex md:w-[90%]">
            <div className="h-20 w-20">
              <Image src="/icon_2.png" alt="eating" width={70} height={70} />
            </div>
            <div className="md:ml-8">
              <h1 className="text-2xl md:mb-3 md:-mt-3 lg:mt-8 font-bold lg:mb-8">
                {TEXTS[3].title}
              </h1>
              <p>{TEXTS[3].content}</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <div className="px-20 mt-10 md:flex md:w-[90%]">
            <div className="h-20 w-20">
              <Image src="/icon_3.png" alt="eating" width={70} height={70} />
            </div>
            <div className="md:ml-8">
              <h1 className="text-2xl md:mb-3 md:-mt-3 lg:mt-8 font-bold lg:mb-8">
                {TEXTS[4].title}
              </h1>
              <p>{TEXTS[4].content}</p>
            </div>
          </div>
        </div>
      </div>
      {/* GRID */}
      <div className="flex flex-col w-full md:grid grid-cols-6 md:grid-rows-none  lg:grid-rows-3">
        {/* Limitations of BMI */}
        <div className=" md:flex md:flex-col md:justify-start md:mb-20 col-span-6 lg:col-span-4 ">
          <div className="md:flex md:flex-col md:justify-center md:items-center lg:px-20 lg:mt-10">
            <h1 className="text-4xl font-bold md:mb-5 lg:mb-8">
              {TEXTS[5].title}
            </h1>
            <p className="w-2/3 md:text-center ">{TEXTS[5].content}</p>
          </div>
        </div>

        <div className=" col-span-6 md:col-span-3 lg:col-span-2">
          <div className="px-20 mt-10 flex flex-col justify-start">
            <div className="flex justify-start items-center mb-4">
              <Image src="/icon_4.png" alt="gender" width={30} height={30} />
              <h1 className="text-xl font-bold ml-5">{TEXTS[6].title}</h1>
            </div>
            <p>{TEXTS[6].content}</p>
          </div>
        </div>

        <div className="hidden lg:block md:h-64 lg:h-80 lg:col-span-2">
          <Image
            src="/line-lefth.png"
            alt="decoration"
            width={400}
            height={400}
            className="ml-32 -mt-24"
          />
        </div>

        <div className="md:h-64 lg:h-80 col-span-6 md:col-span-3 lg:col-span-2">
          <div className="px-20 mt-10 flex flex-col justify-start">
            <div className="flex justify-start items-center mb-4">
              <Image src="/icon_5.png" alt="gender" width={30} height={30} />
              <h1 className="text-xl font-bold ml-5">{TEXTS[7].title}</h1>
            </div>
            <p>{TEXTS[7].content}</p>
          </div>
        </div>

        <div className="md:h-64 lg:h-80 col-span-6 md:col-span-3 lg:col-span-2">
          <div className="px-20 mt-10 flex flex-col justify-start">
            <div className="flex justify-start items-center mb-4">
              <Image src="/icon_6.png" alt="gender" width={30} height={30} />
              <h1 className="text-xl font-bold ml-5">{TEXTS[8].title}</h1>
            </div>
            <p>{TEXTS[8].content}</p>
          </div>
        </div>

        <div className="hidden lg:block md:h-64 lg:h-80 col-span-1"></div>

        <div className="md:h-64 lg:h-80 col-span-6 md:col-span-3 lg:col-span-2">
          <div className="px-20 mt-10 flex flex-col justify-start">
            <div className="flex justify-start items-center mb-4">
              <Image src="/icon_7.png" alt="gender" width={30} height={30} />
              <h1 className="text-xl font-bold ml-5">{TEXTS[9].title}</h1>
            </div>
            <p>{TEXTS[9].content}</p>
          </div>
        </div>

        <div className="hidden md:block lg:hidden col-span"></div>

        <div className="md:h-64 lg:h-80 col-span-6 md:col-span-4 lg:col-span-2">
          <div className="px-20 mt-10 flex flex-col justify-start">
            <div className="flex justify-start items-center mb-4">
              <Image src="/icon_8.png" alt="gender" width={30} height={30} />
              <h1 className="text-xl font-bold ml-5">{TEXTS[10].title}</h1>
            </div>
            <p>{TEXTS[10].content}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
