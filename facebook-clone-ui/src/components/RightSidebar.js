import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { RiVideoAddFill } from 'react-icons/ri';
import { CgMoreAlt } from 'react-icons/cg';
import Contacts from './Contacts';

const RightSidebar = () => {
    return (
        <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w[250px]">
            <div className="flex items-center text-gray-500">
                <p className="flex text-lg font-semibold flex-grow">Contacts</p>
                <div className="flex space-x-1 px-2">
                    <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
                        <RiVideoAddFill />
                    </div>
                    <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
                        <BiSearch />
                    </div>
                    <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
                        <CgMoreAlt />
                    </div>
                </div>
            </div>
            <Contacts
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
                name="Anh Dinh"
                status="online"
            />
            <Contacts
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
                name="Hieu Tran"
                status="online"
            />
            <Contacts
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
                name="Khoa Le"
                status="offline"
            />
        </div>
    );
};

export default RightSidebar;
