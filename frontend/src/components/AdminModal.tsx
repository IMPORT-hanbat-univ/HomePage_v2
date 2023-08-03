import { DetailUser } from "@/util/type";
import React from "react";
import Image from "next/image";
type Props = {
  data: DetailUser;
};

const rank_array = [
  { title: "전체", value: "all" },
  { title: "일반회원", value: "1" },
  { value: "2", title: "동아리원" },
  { value: "3", title: "개발팀장" },
  { value: "4", title: "임원진" },
  { value: "5", title: "관리자" },
];

export default function AdminModal({ data }: Props) {
  console.log("modal", data);
  const { nick_name, createdAt, email, rank, blog, department, framework, github_url, grade, language, profileImg } =
    data;
  const rank_title = rank_array.find((item) => item.value === rank.toString())?.title;
  return (
    <article className="p-12 flex flex-col items-center h-full justify-around">
      <div className="text-xl">
        <div className="flex items-center gap-3 mb-6">
          <Image
            alt="profile image"
            className="object-cover rounded-full w-20 h-20"
            width={200}
            height={200}
            src={profileImg ? `http://localhost:4000${profileImg}` : "/images/import_image.jpg"}
          />
          <div>
            <div>
              <label htmlFor="nick_name" className="mr-2">
                닉네임:
              </label>
              <span id="nick_name">{nick_name}</span>
            </div>
            <div>
              <label htmlFor="email" className="mr-2">
                Email:
              </label>
              <span id="email">{email}</span>
            </div>
            <div>
              <label htmlFor="email" className="mr-2">
                Rank:
              </label>
              <span id="email">{rank_title ? rank_title : "랭크를 찾을 수 없음"}</span>
            </div>
          </div>
        </div>

        {parseInt(rank) > 1 && (
          <div className="flex flex-col gap-3">
            <div>
              <label htmlFor="department" className="mr-2">
                학과:
              </label>
              <span id="department">{department}</span>
            </div>
            <div>
              <label htmlFor="grade" className="mr-2">
                학년:
              </label>
              <span id="grade">{grade}</span>
            </div>
            <div>
              <label htmlFor="language" className="mr-2">
                언어:
              </label>
              <span id="language">{language}</span>
            </div>
            <div>
              <label htmlFor="framework" className="mr-2">
                프레임워크:
              </label>
              <span id="framework">{framework}</span>
            </div>
            <div>
              <label htmlFor="blog" className="mr-2">
                블로그:
              </label>
              <span id="blog">{blog}</span>
            </div>
            <div>
              <label htmlFor="github_url" className="mr-2">
                깃허브:
              </label>
              <span id="github_url">{github_url}</span>
            </div>
          </div>
        )}
      </div>
      <div className="w-full flex justify-end ">
        <button className="px-3 py-2 bg-import-color rounded border-none">수정</button>
      </div>
    </article>
  );
}
