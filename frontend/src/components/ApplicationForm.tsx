"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import ClubInput from "./ui/ClubInput";
import ClubTagInput from "./ui/ClubTagInput";

export default function ApplicationForm() {
  const [applicationData, setApplicationData] = useState({
    grade: "1학년",
    department: "",
    framework: "",
    language: "",
    github_url: "",
    blog: "",
  });
  const [frameList, setFrameList] = useState<string[]>([]);
  const [languageList, setLanguageList] = useState<string[]>([]);
  const [frameText, setFrameText] = useState<string>("");
  const [languageText, setLanguageText] = useState<string>("");

  useEffect(() => {
    setApplicationData((prev) => {
      return { ...prev, framework: frameList.join(","), language: languageList.join(",") };
    });
  }, [frameList, languageList]);

  const changeInput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setApplicationData({ ...applicationData, [e.target.name]: e.target.value });
  };

  const submitApplication = (e: FormEvent) => {
    e.preventDefault();
    if (applicationData.department.trim() === "") {
      return;
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3 md:gap-6">
        <div className="flex items-center gap-4 md:gap-6">
          <div>
            <ClubInput isSelect name={"grade"} value={applicationData.grade} onChange={changeInput} label="학년">
              <option value="1학년">1학년</option>
              <option value="2학년">2학년</option>
              <option value="3학년">3학년</option>
              <option value="4학년 이상">4학년 이상</option>
              <option value="휴학생">휴학생</option>
              <option value="졸업생">졸업생</option>
            </ClubInput>
          </div>
          <div>
            <ClubInput label="학과" name="department" value={applicationData.department} onChange={changeInput} />
          </div>
        </div>

        <div className="w-full">
          <ClubTagInput
            label="언어"
            name="language"
            tagList={languageList}
            value={languageText}
            setValue={setLanguageText}
            setTagList={setLanguageList}
          />
        </div>
        <div className="w-full">
          <ClubTagInput
            label="프레임워크"
            name="framework"
            tagList={frameList}
            value={frameText}
            setValue={setFrameText}
            setTagList={setFrameList}
          />
        </div>
        <div className=" w-full">
          <ClubInput name="blog" label="블로그" value={applicationData.blog} onChange={changeInput} />
        </div>
        <div className=" w-full">
          <ClubInput name="github_url" label="깃허브" value={applicationData.github_url} onChange={changeInput} />
        </div>
      </div>
      <div className="w-full flex justify-end mt-6 md:mt-10 ">
        <button
          onClick={submitApplication}
          className={` py-1 bg-import-color rounded-[10px]  text-white px-8 text-[12px] border-none `}
        >
          저장
        </button>
      </div>
    </>
  );
}
