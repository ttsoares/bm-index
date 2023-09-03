"use client";

import { useState } from "react";

import { TEXTS } from "./texts";

import Image from "next/image";
import { useForm } from "react-hook-form";

import HeReAs from "@/components/he_re_as";
import Limitations from "@/components/limitations";

function testVar(variable) {
  return Boolean(variable && variable !== "0.00");
}

const lbsToKgs = 0.453592;
const ftsToMts = 0.03048;
const ftsToCms = 30.48;
const insToFts = 0.083333;
const insToMts = 0.0254;
const insToCms = 2.54;
const stsToKgs = 6.35029;
const stsToLbs = 14;
const cmsToFts = 0.0328084;
const kgsToSts = 0.157473;
const ftsToIns = 12;
const BMI_ft_in = 703;
const MinBMI = 18.5;
const MaxBMI = 24.9;

//-------------------------------
export default function Home() {
  const form = useForm({
    mode: "onChange",
    defaultValues: {
      weightIS: "",
      heightIS: "",
      weightSt: "",
      weightLb: "",
      heightFt: "",
      heightIn: "",
    },
  });

  const [measureSystem, setMeasureSystem] = useState("metric");

  const { register, resetField, watch, onChange, setValue, getValues } = form;

  let calcBMI = 0;

  // IS
  let enteredWeightIS = watch("weightIS");
  let enteredHeightIS = watch("heightIS");
  // Imperial
  let enteredWeightSt = watch("weightSt");
  let enteredWeightLb = watch("weightLb");
  let enteredHeightFt = watch("heightFt");
  let enteredHeightIn = watch("heightIn");

  function changeSystem(data) {
    setMeasureSystem(data);

    if (
      (enteredHeightIS && enteredWeightIS) ||
      (enteredWeightSt && enteredWeightLb && enteredHeightFt && enteredHeightIn)
    ) {
      if (data === "metric") {
        // imperial --> IS
        // height in centimeters
        enteredHeightIS = String(
          (
            Number(enteredHeightFt) * ftsToCms +
            Number(enteredHeightIn) * insToCms
          ).toFixed(2)
        );
        //weight in Kgs
        enteredWeightIS = String(
          (
            Number(enteredWeightSt) * stsToKgs +
            Number(enteredWeightLb) * lbsToKgs
          ).toFixed(2)
        );
        setValue("heightIS", enteredHeightIS);
        setValue("weightIS", enteredWeightIS);
      } else {
        // IS --> imperial
        const metToFt = Math.trunc(Number(enteredHeightIS) * cmsToFts);
        const metToIn = (
          (Number(enteredHeightIS) * cmsToFts - metToFt) *
          ftsToIns
        ).toFixed(2);
        enteredHeightFt = String(metToFt);
        enteredHeightIn = String(metToIn);
        setValue("heightFt", enteredHeightFt);
        setValue("heightIn", enteredHeightIn);

        const kgToSt = Math.trunc(Number(enteredWeightIS) * kgsToSts);
        const kgToLb = (
          (Number(enteredWeightIS) * kgsToSts - kgToSt) *
          stsToLbs
        ).toFixed(2);
        enteredWeightSt = String(kgToSt);
        enteredWeightLb = String(kgToLb);
        setValue("weightSt", enteredWeightSt);
        setValue("weightLb", enteredWeightLb);
      }
    }
  }

  function weightIdeal() {
    let weightLow = 0;
    let weightHight = 0;

    // Convertion factor from lb/in² to lb/ft²
    const CentToMeter = 100;

    if (measureSystem === "metric") {
      weightLow = (MinBMI * Math.pow(enteredHeightIS / CentToMeter, 2)).toFixed(
        2
      );
      weightHight = (
        MaxBMI * Math.pow(enteredHeightIS / CentToMeter, 2)
      ).toFixed(2);
      return <span>{`${weightLow}Kgs - ${weightHight}Kgs`}</span>;
    } else {
      // first conv to ins
      const ins = Number(enteredHeightFt) * ftsToIns + Number(enteredHeightIn);

      weightLow = ((MinBMI * Math.pow(ins, 2)) / BMI_ft_in).toFixed(2);
      weightHight = ((MaxBMI * Math.pow(ins, 2)) / BMI_ft_in).toFixed(2);
      return <span>{`${weightLow}lbs - ${weightHight}lbs`}</span>;
    }
  }

  function BMI_Imperial() {
    const height_ins =
      Number(enteredHeightFt) * ftsToIns + Number(enteredHeightIn);
    const weight_lbs =
      Number(enteredWeightSt) * stsToLbs + Number(enteredWeightLb);

    const BMI = String(
      ((weight_lbs / Math.pow(height_ins, 2)) * BMI_ft_in).toFixed(1)
    );

    return BMI;
  }

  return (
    <main className="flex min-h-screen w-screen flex-col justify-center items-center lg:px-9">
      <div className="z-10 flex flex-col items-center md:justify-center lg:flex-row w-full">
        <div className="flex flex-col items-center mb-28 md:mb-0 h-[300px] md:w-full md:items-center lg:items-start w-full lg:w-1/2 lg:h-[640px]">
          <div className="h-12 w-12 mt-10 mb-6  md:h-14 md:w-14 md:mb-10 lg:h-16 lg:w-16 lg:ml-[105px] lg:mt-14 lg:pt-4">
            <Image src="/logo.svg" alt="logo" width={70} height={70} />
          </div>
          <div className="lg:mt-24  md:flex md:flex-col md:justify-center items-center">
            <h1 className="text-5xl font-bold lg:text-[4rem]/[1] lg:ml-14 lg:mb-4 text-center lg:text-start lg:mt-2 lg:w-[78%]">
              {TEXTS[0].title}
            </h1>
            <p className="w-full p-6 text-center md:p-0 md:w-3/4 md:mt-8 lg:text-start lg:w-3/4 lg:pl-8 lg:mt-0">
              {TEXTS[0].content}
            </p>
          </div>
        </div>

        <div className="w-[90%] flex items-center md:justify-start lg:w-[50%] mt-8 lg:mt-9 md:ml-8 ">
          <div className="w-full md:w-[95%] lg:w-[85%] lg:mt-[128px] min-h-fit rounded-xl bg-white p-6 shadow-xl">
            <h2 className="text-[1.45rem]/[1] font-bold mb-7 ml-3 mt-4">
              Enter your details bellow
            </h2>
            <form>
              <div className="flex w-full justify-between">
                <div className="mb-5 flex w-full justify-center">
                  <div className="flex items-center w-2/3 ml-6 md:ml-0 lg:ml-3 mt-1">
                    <input
                      type="radio"
                      defaultChecked={true}
                      name="measures"
                      value="metric"
                      id="metric"
                      className="hidden"
                    />
                    <label
                      htmlFor="metric"
                      className=" flex items-center cursor-pointer"
                    >
                      <span
                        onClick={() => changeSystem("metric")}
                        className="w-7 h-7 inline-block mr-5 rounded-full border border-gray-500 flex-no-shrink"
                      ></span>
                      Metric
                    </label>
                  </div>

                  <div className="flex items-center w-2/3 mt-1">
                    <input
                      type="radio"
                      name="measures"
                      value="imperial"
                      id="imperial"
                      className="hidden "
                    />
                    <label
                      htmlFor="imperial"
                      className=" flex items-center cursor-pointer"
                    >
                      <span
                        onClick={() => changeSystem("imperial")}
                        className="w-7 h-7 inline-block mr-5 rounded-full border border-gray-500 flex-no-shrink"
                      ></span>
                      Imperial
                    </label>
                  </div>
                </div>
              </div>
              {/* Imputs metric */}
              {measureSystem === "metric" && (
                <div className="md:flex w-full mt-4">
                  <div className="w-full md:w-1/2 h-28 mb-3">
                    <label
                      htmlFor="height"
                      className="block text-sm ml-4 md:ml-0 lg:ml-1"
                    >
                      Height
                    </label>
                    <div className="flex items-center py-1 justify-between w-11/12 mt-2 border-2 border-gray-300 rounded-lg">
                      <input
                        type="text"
                        id="height"
                        placeholder="0"
                        {...register("heightIS")}
                        className="ml-2 text-2xl font-bold text-gray-800 py-5 w-3/4 h-14 border-gray-300 focus:ring-3 focus:ring-blue-300"
                      />
                      <p className="font-bold text-blue-700 text-2xl mr-2">
                        cm
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 h-28 mb-3">
                    <label
                      htmlFor="weight"
                      className="block text-sm ml-6 md:ml-0 lg:ml-1"
                    >
                      Weight
                    </label>
                    <div className="flex items-center py-1 justify-between w-11/12 mt-2 border-2 border-gray-300 rounded-lg">
                      <input
                        type="text"
                        id="weight"
                        placeholder="0"
                        {...register("weightIS")}
                        className="ml-2 text-2xl font-bold text-gray-800 py-5 w-3/4 h-14 border-gray-300 focus:ring-3 focus:ring-blue-300"
                      />
                      <p className="font-bold text-blue-700 text-2xl mr-2">
                        Kg
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {/* Imputs Imperial */}
              {measureSystem === "imperial" && (
                <div className="md:flex flex-col w-full">
                  <div className="w-full">
                    <label
                      htmlFor="heightFt"
                      className="block text-sm ml-4 md:ml-0 lg:ml-3"
                    >
                      Height
                    </label>

                    <div className="flex w-full">
                      {/* Height ft */}
                      <div className="flex items-center justify-between w-full md:w-1/2 m-3 border-2 border-gray-300 rounded-lg">
                        <input
                          type="text"
                          id="heightFt"
                          placeholder="0"
                          {...register("heightFt")}
                          className="ml-2 text-2xl font-bold text-gray-800 py-5 w-3/4  h-14 border-gray-300 focus:ring-3 focus:ring-blue-300"
                        />
                        <p className="font-bold text-blue-700 text-2xl mr-2">
                          ft
                        </p>
                      </div>
                      {/* Height in */}
                      <div className="flex items-center justify-between w-full md:w-1/2 m-3 border-2 border-gray-300 rounded-lg">
                        <input
                          type="text"
                          id="heightIn"
                          placeholder="0"
                          {...register("heightIn")}
                          className="ml-2 text-2xl font-bold text-gray-800 py-5 w-3/4  h-14 border-gray-300 focus:ring-3 focus:ring-blue-300"
                        />
                        <p className="font-bold text-blue-700 text-2xl mr-2">
                          in
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="weightSt"
                      className="block text-sm ml-6 md:ml-0 lg:ml-3"
                    >
                      Weight
                    </label>

                    <div className="flex w-full">
                      {/* Wight st */}
                      <div className="flex items-center justify-between w-full md:w-1/2 m-3 border-2 border-gray-300 rounded-lg">
                        <input
                          type="text"
                          id="weightSt"
                          placeholder="0"
                          {...register("weightSt")}
                          className="ml-2 text-2xl font-bold text-gray-800 py-5 w-3/4 h-14 border-gray-300 focus:ring-3 focus:ring-blue-300"
                        />
                        <p className="font-bold text-blue-700 text-2xl mr-2">
                          st
                        </p>
                      </div>
                      {/* Weight lb */}

                      <div className="flex items-center justify-between w-full md:w-1/2 m-3 border-2 border-gray-300 rounded-lg">
                        <input
                          type="text"
                          id="weightLb"
                          placeholder="0"
                          {...register("weightLb")}
                          className="ml-2 text-2xl font-bold text-gray-800 py-5 w-3/4 h-14 border-gray-300 focus:ring-3 focus:ring-blue-300"
                        />
                        <p className="font-bold text-blue-700 text-2xl mr-2">
                          lb
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex justify-start items-center w-full h-fit md:h-[163px] mt-8 md:mt-2 bg-gradient-to-r from-[#365FF7] to-[#839eff] rounded-xl md:rounded-l-[15px] md:rounded-r-[100px]">
                {(testVar(enteredWeightIS) && testVar(enteredHeightIS)) ||
                (testVar(enteredWeightSt) &&
                  testVar(enteredWeightLb) &&
                  testVar(enteredHeightFt) &&
                  testVar(enteredHeightIn)) ? (
                  <div className="text-white flex flex-col md:flex-row w-full justify-start items-start font-bold">
                    <div className="w-full ml-6 mt-10 lg:w-1/3">
                      <p className="mr-2">Your BMI is...</p>
                      <p className="text-6xl font-bold mt-2 ml-3">
                        {measureSystem === "metric" ? (
                          <span>
                            {
                              (calcBMI = (
                                Number(enteredWeightIS) /
                                Math.pow(Number(enteredHeightIS) / 100, 2)
                              ).toFixed(1))
                            }
                          </span>
                        ) : (
                          <span>{(calcBMI = BMI_Imperial())}</span>
                        )}
                      </p>
                    </div>

                    <div className="lg:w-2/3 py-8 md:p-12 mr-2">
                      {calcBMI < MinBMI ? (
                        <p className="text-sm ml-6 mt-2">
                          Your BMI suggest you&apos;re underweight. Your ideal
                          weight is between&nbsp;
                          {weightIdeal()}
                        </p>
                      ) : (
                        <></>
                      )}
                      {(calcBMI >= MinBMI) & (calcBMI <= MaxBMI) ? (
                        <p className="text-sm ml-6 mt-2">
                          Your BMI suggest you&apos;re a healthy weight. Your
                          ideal weight is between&nbsp;
                          {weightIdeal()}
                        </p>
                      ) : (
                        <></>
                      )}
                      {calcBMI > MaxBMI ? (
                        <p className="text-sm ml-6 mt-2">
                          Your BMI suggest you&apos;re over weighted. Your ideal
                          weight is between&nbsp;
                          {weightIdeal()}
                        </p>
                      ) : (
                        <></>
                      )}
                      {calcBMI >= 30 ? (
                        <p className="text-sm ml-6 mt-2">
                          Your BMI suggest you&apos;re obese. Your ideal weight
                          is between&nbsp;
                          {weightIdeal()}
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
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

      <div className="flex flex-col relative justify-center items-center md:flex-row w-full lg:w-[90%] lg:justify-between lg:mt-[72px]">
        <div className="w-full mx-auto md:mx-0 flex flex-col md:flex-row justify-center items-end lg:w-auto lg:mt-[91px]">
          <div className="md:w-[45%] md:pt-24 lg:pt-0 lg:w-[78%]">
            <Image
              src="/image-man-eating.webp"
              width={890}
              height={890}
              alt="person"
              className="md:-ml-24 lg:ml-12"
            />
          </div>
          {/* What your BMI result means */}
          <div className="p-8 md:p-0 md:w-1/2 md:mb-10 lg:mt-44 lg:mb-12 lg:w-[70%] lg:ml-[170px] ">
            <h1 className="mb-7 md:mb-8 md:pr-20 lg:pr-0 text-2xl md:text-5xl font-bold lg:mb-8">
              {TEXTS[1].title}
            </h1>
            <p className="md:w-[70%] lg:w-full lg:pr-9">{TEXTS[1].content}</p>
          </div>
        </div>

        <div className="hidden absolute top-0 right-0 lg:block w-1/2">
          <Image
            src="/pattern-curved-line-left.svg"
            alt="decoration"
            width={80}
            height={80}
            className=" mt-14 ml-[460px]"
          />
        </div>
      </div>

      <HeReAs />

      <Limitations />
    </main>
  );
}
