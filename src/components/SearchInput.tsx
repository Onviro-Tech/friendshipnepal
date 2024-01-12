import React, {useEffect, useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom';

const SearchInput = () => {
    const navigate = useNavigate();
    const [destination, setDestination] = useState("");

    const handleSubmit = () => {
        if (destination) {
            navigate(`/search?destination=${destination}`);
        }
    };
    useEffect(() => {
       
    }, [])
    return (
        <div>
            <div className="w-max flex justify-end relative">
                <input type="text" placeholder="Search....."
                    value={destination}
                    onKeyDown={
                        (e) => {
                            if (e.key === "Enter") {
                                handleSubmit()
                            }
                        }
                    }
                    onChange={
                        (e) => setDestination(e.target.value)
                    }
                    className="w-[197px] h-[40px] font-inter font-medium text-[16px] leading-[18px] pr-[6%] pl-[37px] py-[5px] text-[#2D3134] border rounded-[25px] border-[#2D3134] outline-0"/>
                <AiOutlineSearch className="w-[21px] h-[21px] text-[#2D3134] absolute absolute left-[7%] top-[50%] transform -translate-y-[50%]"/>
            </div>
             </div>
    )
}

export default SearchInput
