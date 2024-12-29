

import { IoLanguageSharp } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";

function Button(props) {
    return (
        <button className={`rounded-md px-4 py-1.5 mb-3 transform duration-500  hover:scale-105 text-white ${props.type === 'Language' || props.type === 'Select' ? 'bg-[rgba(255,255,255,0.1)] border border-gray-500 font-nsans-regular' : 'bg-red-600 '} ${props.className}`}
            onClick={props.onClick}
        >
            {props.type === 'Select' && (
                <>
                    <span className='mr-2'>{props.text}</span>
                    <span><MdOutlineArrowDropDown className='inline' /></span>
                </>
            )}
            {props.type === 'Language' && (
                <>
                    <span className='mr-1'><IoLanguageSharp className='inline' /></span>
                    <span className='hidden sm:inline mr-2'>{props.text}</span>
                    <span><MdOutlineArrowDropDown className='inline' /></span>
                </>
            )}
            {props.type !== 'Language' && props.type !== 'Select' && (
                <span>{props.text}</span>
            )}

        </button>
    )
}

export default Button