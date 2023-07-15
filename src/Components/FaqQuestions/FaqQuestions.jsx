import React from 'react';

function FaqQuestions(props) {

    const textTitle = props.textTitle;
    const textDescription = props.textDescription;

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex flex-row justify-between'>
                <div className='textTitle text-[18px] text-[#474747] font-semibold'>{textTitle}</div>
                <div className='align-center '>
                    <svg width="18" height="2" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.25 1.75H0.75C0.551088 1.75 0.360322 1.67098 0.21967 1.53033C0.0790178 1.38968 0 1.19891 0 1C0 0.801088 0.0790178 0.610322 0.21967 0.46967C0.360322 0.329018 0.551088 0.25 0.75 0.25H17.25C17.4489 0.25 17.6397 0.329018 17.7803 0.46967C17.921 0.610322 18 0.801088 18 1C18 1.19891 17.921 1.38968 17.7803 1.53033C17.6397 1.67098 17.4489 1.75 17.25 1.75Z" fill="#474747" />
                    </svg>
                    <svg width="18" height="2" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.25 1.75H0.75C0.551088 1.75 0.360322 1.67098 0.21967 1.53033C0.0790178 1.38968 0 1.19891 0 1C0 0.801088 0.0790178 0.610322 0.21967 0.46967C0.360322 0.329018 0.551088 0.25 0.75 0.25H17.25C17.4489 0.25 17.6397 0.329018 17.7803 0.46967C17.921 0.610322 18 0.801088 18 1C18 1.19891 17.921 1.38968 17.7803 1.53033C17.6397 1.67098 17.4489 1.75 17.25 1.75Z" fill="#474747" />
                    </svg>
                </div>
            </div>
            <div className='flex flex-row justify-between text-[#595959] text-[16px] font-normal'>
                {textDescription}
            </div>
            <hr className='mt-4' />
        </div>
    )
}

export default FaqQuestions