"use client";

import { TEXTS } from "./texts";

import Image from "next/image";
import { useForm } from "react-hook-form";

import HeReAs from "@/components/he_re_as";
import Limitations from "@/components/limitations";

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
    <main className="flex min-h-screen w-screen flex-col justify-center items-center lg:px-9">
      <div className="z-10 flex flex-col items-center md:justify-center lg:flex-row w-full ">
        <div
          className="flex flex-col items-center justify-center h-[400px]
        md:w-full md:items-center
        lg:items-start lg:p-4 w-full lg:w-1/2  lg:h-[640px]"
        >
          <div className="h-12 w-12 mt-10 mb-4  md:h-14 md:w-14 md:mb-10 lg:h-20 lg:w-20 lg:ml-28 lg:mt-0">
            <Image src="/logo.png" alt="logo" width={70} height={70} />
          </div>
          <div className="lg:mt-10  md:flex md:flex-col md:justify-center items-center">
            <h1 className="text-5xl font-bold lg:text-6xl lg:ml-28 lg:mb-4 text-center lg:text-start">
              {TEXTS[0].title}
            </h1>
            <p className="w-full p-5 text-center md:p-0 md:w-3/4 md:mt-8 lg:text-start lg:w-3/4 lg:px-8  lg:mt-0">
              {TEXTS[0].content}
            </p>
          </div>
        </div>
        <div className="w-[90%] flex items-center md:justify-center lg:w-1/2 mt-8 lg:mt-6 lg:h-[640px]">
          <div className="md:w-[95%] lg:w-[80%] lg:mt-16 md:h-96 rounded-xl bg-white p-6 shadow-xl">
            <h2 className="text-xl font-bold mb-5">
              Enter your details bellow
            </h2>
            <form>
              <div className="flex w-full justify-between">
                <div className="mb-5 flex w-full justify-center">
                  <div className="w-2/3 ml-6 md:ml-0 lg:ml-3">
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
              <div className="md:flex w-full">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="height"
                    className="block text-sm ml-4 md:ml-0 lg:ml-3"
                  >
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
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="weight"
                    className="block text-sm ml-6 md:ml-0 lg:ml-3"
                  >
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
              <div className="flex justify-start items-center w-full h-40 mt-8 md:mt-0 bg-gradient-to-r from-[#365FF7] to-[#839eff] rounded-xl md:rounded-l-[15px] md:rounded-r-[100px]">
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
        <div className="w-[90%] mx-auto md:mx-0 md:w-1/2 flex justify-center items-center mt-36">
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

          <div className="p-8 md:p-0 md:mt-52 lg:px-20 lg:mt-10 ">
            <h1 className="mb-7 md:mb-0 text-3xl md:text-4xl font-bold lg:mb-8">
              {TEXTS[1].title}
            </h1>
            <p className="md:w-[80%] md:mt-10 lg:w-2/3">{TEXTS[1].content}</p>
          </div>
        </div>
      </div>

      <HeReAs />

      <Limitations />
    </main>
  );
}
