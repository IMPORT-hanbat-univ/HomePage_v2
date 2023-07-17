import React from "react";
import PostDetail from "@/components/PostDetail";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { checkUser } from "@/api/auth";
import { getPostDetail } from "@/api/post";
type Props = {
  params: {
    id: string;
  };
};

export default async function NoticePage({ params: { id } }: Props) {
  console.log(123);
  const dataPromise = getPostDetail("notice", parseInt(id));
  const cookieObj = cookies();
  const userPromise = checkUser(cookieObj.get("accessToken")?.value || "", cookieObj.get("refreshToken")?.value || "");
  const [{ data }, { decodeUser, error }] = await Promise.all([dataPromise, userPromise]);

  if (typeof data === "string" || Array.isArray(data)) {
    notFound();
  } else {
    return (
      <>
        <PostDetail user={decodeUser} category="notice" />
      </>
    );
  }
}
