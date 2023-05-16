import { CreatePost, Notice, PostDetailType } from "@/util/type";
import axios from "axios";

export async function getNoticeList(): Promise<Notice[] | string | null> {
  try {
    const result = await fetch(`http://${process.env.NEXT_PUBLIC_NETWORK_BACK_NODE_ADRESS}:4000/about/notice`, {
      method: "GET",
      next: {
        revalidate: 0,
      },
    });
    const data = await result.json();
    return data.item as Notice[] | [];
  } catch (err: any) {
    console.log(err);
    return "공지사항 목록을 불러오는 도중 발생한 에러!!";
  }
}

export async function getNoticeDetail(id: number) {
  try {
    console.log(`http://${process.env.NETWORK_BACK_NODE_ADRESS}:4000/about/notice/${id}`);
    console.log("123");
    const result = await fetch(`http://${process.env.NETWORK_BACK_NODE_ADRESS}:4000/about/notice/${id}`);
    let data: any;
    const contentType = result.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      data = await result.json();
    } else {
      data = await result.text();
    }
    console.log("data", data);
    return (data?.item as { item: PostDetailType | [] }) || (data as string);
  } catch (err: any) {
    console.log(err);
    return "공지사항 글을 가져오는 도중 발생한 에러!";
  }
}


export async function createNotice(post: CreatePost){
  try{
    
  }catch(err:any){
    console.log(err);
    return "글 저장 과정에서 오류가 발생했습니다."
  }
}