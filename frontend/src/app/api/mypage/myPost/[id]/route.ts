import { NextResponse } from "next/server";

export async function GET(req: Request, { params: { id } }: { params: { id: string } }) {
  return NextResponse.json({
    list: [
      {
        id: 1,
        title: "인포 테스트1입니다",
        nick_name: "유저1",
        category: "qna",
        tagF: "짱구",
        tagS: "맹구",
        tagT: null,
        createdAt: "2023-03-15 08:00:00",

        image: "/images/trip1.jpg",
      },
      {
        id: 2,
        title: "인포 테스트2입니다",
        nick_name: "유저2",
        category: "qna",
        tagF: "철수",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-11 08:00:00",
      },
      {
        id: 3,
        title: "인포 테스트3입니다",
        nick_name: "유저3",
        category: "qna",
        tagF: "짱구",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-16 08:00:00",
      },
      {
        id: 4,
        title: "인포 테스트4입니다",
        nick_name: "유저4",
        category: "qna",
        tagF: "철수",
        tagS: null,
        tagT: null,
        createdAt: "2023-03-12 08:00:00",
      },
      {
        id: 5,
        title: "인포 테스트5입니다",
        nick_name: "유저1",
        category: "qna",
        tagF: "철수",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-15 08:00:00",
      },
      {
        id: 6,
        title: "인포 테스트6입니다",
        nick_name: "유저6",
        category: "qna",
        tagF: "철수",
        tagS: "짱구",
        tagT: "맹구",
        createdAt: "2023-03-28 08:00:00",
      },
      {
        id: 7,
        title: "인포 테스트7입니다",
        nick_name: "유저7",
        category: "devnews",
        tagF: "짱구",
        tagS: null,
        tagT: null,
        createdAt: "2023-03-22 08:00:00",
      },
      {
        id: 8,
        title: "인포 테스트8입니다",
        nick_name: "유저8",
        category: "qna",
        tagF: "철수",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-11 08:00:00",
      },
      {
        id: 9,
        title: "인포 테스트9입니다",
        nick_name: "유저9",
        category: "notice",
        tagF: "훈이",
        tagS: null,
        tagT: null,
        createdAt: "2023-03-25 08:00:00",
      },
      {
        id: 10,
        title: "인포 테스트10입니다",
        nick_name: "유저10",
        category: "Bigdata",
        tagF: "철수",
        tagS: "맹구",
        tagT: null,
        createdAt: "2023-03-31 08:00:00",

        image: "/images/trip1.jpg",
      },
      {
        id: 11,
        title: "인포 테스트11입니다",
        nick_name: "유저11",
        category: "notice",
        tagF: "철수",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-04-01 08:00:00",
      },
      {
        id: 12,
        title: "인포 테스트12입니다",
        nick_name: "유저12",
        category: "project",
        tagF: "철수",
        tagS: "짱구",
        tagT: null,
        createdAt: "2023-03-26 08:00:00",
      },
      {
        id: 13,
        title: "인포 테스트13입니다",
        nick_name: "유저13",
        category: "notice",
        tagF: "짱구",
        tagS: "맹구",
        tagT: "유리",
        createdAt: "2023-03-03 08:00:00",
      },
      {
        id: 14,
        title: "인포 테스트14입니다",
        nick_name: "유저14",
        category: "qna",
        tagF: "철수",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-15 12:00:00",
      },
      {
        id: 15,
        title: "인포 테스트15입니다",
        nick_name: "유저15",
        category: "devnews",
        tagF: "짱구",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-02-16 08:00:00",
      },
      {
        id: 16,
        title: "인포 테스트16입니다",
        nick_name: "유저16",
        category: "qna",
        tagF: "철수",
        tagS: null,
        tagT: null,
        createdAt: "2023-03-12 08:00:00",
      },
      {
        id: 17,
        title: "인포 테스트17입니다",
        nick_name: "유저17",
        category: "notice",
        tagF: "철수",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-15 08:00:00",
      },
      {
        id: 18,
        title: "인포 테스트18입니다",
        nick_name: "유저18",
        category: "qna",
        tagF: "철수",
        tagS: "짱구",
        tagT: "맹구",
        createdAt: "2023-03-28 08:00:00",
      },
      {
        id: 19,
        title: "인포 테스트19입니다",
        nick_name: "유저19",
        category: "notice",
        tagF: "짱구",
        tagS: "맹구",
        tagT: null,
        createdAt: "2023-03-15 08:00:00",

        image: "/images/trip1.jpg",
      },
      {
        id: 20,
        title: "인포 테스트20입니다",
        nick_name: "유저20",
        category: "notice",
        tagF: "철수",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-11 08:00:00",
      },
      {
        id: 21,
        title: "인포 테스트21입니다",
        nick_name: "유저21",
        category: "notice",
        tagF: "짱구",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-16 08:00:00",
      },
      {
        id: 22,
        title: "인포 테스트22입니다",
        nick_name: "유저22",
        category: "qna",
        tagF: "철수",
        tagS: null,
        tagT: null,
        createdAt: "2023-03-12 08:00:00",
      },
      {
        id: 23,
        title: "인포 테스트23입니다",
        nick_name: "유저1",
        category: "notice",
        tagF: "철수",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-15 08:00:00",
      },
      {
        id: 24,
        title: "인포 테스트24입니다",
        nick_name: "유저6",
        category: "notice",
        tagF: "철수",
        tagS: "짱구",
        tagT: "맹구",
        createdAt: "2023-03-28 08:00:00",
      },
      {
        id: 25,
        title: "인포 테스트25입니다",
        nick_name: "유저1",
        category: "devnews",
        tagF: "짱구",
        tagS: "맹구",
        tagT: null,
        createdAt: "2023-03-15 08:00:00",

        image: "/images/trip1.jpg",
      },
      {
        id: 26,
        title: "인포 테스트26입니다",
        nick_name: "유저2",
        category: "devnews",
        tagF: "철수",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-11 08:00:00",
      },
      {
        id: 27,
        title: "인포 테스트27입니다",
        nick_name: "유저3",
        category: "devnews",
        tagF: "짱구",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-16 08:00:00",
      },
      {
        id: 28,
        title: "인포 테스트28입니다",
        nick_name: "유저4",
        category: "qna",
        tagF: "철수",
        tagS: null,
        tagT: null,
        createdAt: "2023-03-12 08:00:00",
      },
      {
        id: 29,
        title: "인포 테스트29입니다",
        nick_name: "유저1",
        category: "devnews",
        tagF: "철수",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-15 08:00:00",
      },
      {
        id: 30,
        title: "인포 테스트30입니다",
        nick_name: "유저6",
        category: "devnews",
        tagF: "철수",
        tagS: "짱구",
        tagT: "맹구",
        createdAt: "2023-03-28 08:00:00",
      },
      {
        id: 31,
        title: "인포 테스트31입니다",
        nick_name: "유저1",
        category: "project",
        tagF: "짱구",
        tagS: "맹구",
        tagT: null,
        createdAt: "2023-03-15 08:00:00",

        image: "/images/trip1.jpg",
      },
      {
        id: 32,
        title: "인포 테스트32입니다",
        nick_name: "유저2",
        category: "project",
        tagF: "철수",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-11 08:00:00",
      },
      {
        id: 33,
        title: "인포 테스트33입니다",
        nick_name: "유저3",
        category: "project",
        tagF: "짱구",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-16 08:00:00",
      },
      {
        id: 34,
        title: "인포 테스트34입니다",
        nick_name: "유저4",
        category: "qna",
        tagF: "철수",
        tagS: null,
        tagT: null,
        createdAt: "2023-03-12 08:00:00",
      },
      {
        id: 35,
        title: "인포 테스트35입니다",
        nick_name: "유저1",
        category: "project",
        tagF: "철수",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-15 08:00:00",
      },
      {
        id: 36,
        title: "인포 테스트36입니다",
        nick_name: "유저6",
        category: "project",
        tagF: "철수",
        tagS: "짱구",
        tagT: "맹구",
        createdAt: "2023-03-28 08:00:00",
      },
      {
        id: 37,
        title: "인포 테스트37입니다",
        nick_name: "유저1",
        category: "project",
        tagF: "짱구",
        tagS: "맹구",
        tagT: null,
        createdAt: "2023-03-15 08:00:00",

        image: "/images/trip1.jpg",
      },
      {
        id: 38,
        title: "인포 테스트38입니다",
        nick_name: "유저2",
        category: "project",
        tagF: "철수",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-11 08:00:00",
      },
      {
        id: 39,
        title: "인포 테스트39입니다",
        nick_name: "유저3",
        category: "project",
        tagF: "짱구",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-16 08:00:00",
      },
      {
        id: 40,
        title: "인포 테스트40입니다",
        nick_name: "유저4",
        category: "qna",
        tagF: "철수",
        tagS: null,
        tagT: null,
        createdAt: "2023-03-12 08:00:00",
      },
      {
        id: 41,
        title: "인포 테스트41입니다",
        nick_name: "유저1",
        category: "qna",
        tagF: "철수",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-15 08:00:00",
      },
      {
        id: 42,
        title: "인포 테스트42입니다",
        nick_name: "유저6",
        category: "qna",
        tagF: "철수",
        tagS: "짱구",
        tagT: "맹구",
        createdAt: "2023-03-28 08:00:00",
      },
      {
        id: 43,
        title: "인포 테스트43입니다",
        nick_name: "유저1",
        category: "qna",
        tagF: "짱구",
        tagS: "맹구",
        tagT: null,
        createdAt: "2023-03-15 08:00:00",

        image: "/images/trip1.jpg",
      },
      {
        id: 44,
        title: "인포 테스트44입니다",
        nick_name: "유저2",
        category: "qna",
        tagF: "철수",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-11 08:00:00",
      },
      {
        id: 45,
        title: "인포 테스트45입니다",
        nick_name: "유저3",
        category: "qna",
        tagF: "짱구",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-16 08:00:00",
      },
      {
        id: 46,
        title: "인포 테스트46입니다",
        nick_name: "유저4",
        category: "qna",
        tagF: "철수",
        tagS: null,
        tagT: null,
        createdAt: "2023-03-12 08:00:00",
      },
      {
        id: 47,
        title: "인포 테스트47입니다",
        nick_name: "유저1",
        category: "qna",
        tagF: "철수",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-15 08:00:00",
      },
      {
        id: 48,
        title: "인포 테스트48입니다",
        nick_name: "유저6",
        category: "qna",
        tagF: "철수",
        tagS: "짱구",
        tagT: "맹구",
        createdAt: "2023-03-28 08:00:00",
      },
      {
        id: 49,
        title: "인포 테스트49입니다",
        nick_name: "유저1",
        category: "qna",
        tagF: "짱구",
        tagS: "맹구",
        tagT: null,
        createdAt: "2023-03-15 08:00:00",

        image: "/images/trip1.jpg",
      },
      {
        id: 50,
        title: "인포 테스트50입니다",
        nick_name: "유저2",
        category: "qna",
        tagF: "철수",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-11 08:00:00",
      },
      {
        id: 51,
        title: "인포 테스트51입니다",
        nick_name: "유저3",
        category: "qna",
        tagF: "짱구",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-16 08:00:00",
      },
      {
        id: 52,
        title: "인포 테스트52입니다",
        nick_name: "유저4",
        category: "qna",
        tagF: "철수",
        tagS: null,
        tagT: null,
        createdAt: "2023-03-12 08:00:00",
      },
      {
        id: 53,
        title: "인포 테스트53입니다",
        nick_name: "유저1",
        category: "qna",
        tagF: "철수",
        tagS: "훈이",
        tagT: "유리",
        createdAt: "2023-03-15 08:00:00",
      },
      {
        id: 54,
        title: "인포 테스트54입니다",
        nick_name: "유저6",
        category: "qna",
        tagF: "철수",
        tagS: "짱구",
        tagT: "맹구",
        createdAt: "2023-03-28 08:00:00",
      },
    ],
  });
}
