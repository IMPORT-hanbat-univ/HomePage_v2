import React from 'react';
import { BsDot } from 'react-icons/bs';
import cls from "classnames"
import { useRouter } from 'next/router';

export default function OrderCategory({seleted, orderArray}) {
    const router = useRouter();

    const clickSort = (order) => {
        router.push({pathname: router.pathname, query: {...router.query, order}}, undefined, {shallow: true})
    }
    return (
        <ul className='w-full flex items-center '>
           {orderArray.map((item) => (
                <li key={item.order}>
                    <button onClick={() => clickSort(item.order)} className={cls('p-2 h-7 text-xs flex items-center font-semibold', {"text-black" : seleted === item.order}, {"text-light-gray" : seleted !== item.order})} disabled={seleted === item.order}>
                        <BsDot className='text-import-color text-lg' />
                        {` ${item.name}`}       

                    </button>
                </li>
           ))} 
        </ul>
    );
}

