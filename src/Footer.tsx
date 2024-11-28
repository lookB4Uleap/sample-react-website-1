import drugFreesign from "/images/drug-free.png";
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
    return (
        <div className="w-full flex flex-1 flex-col py-5 px-5 lg:px-20 bg-black h-96">
            <div className="flex flex-1 flex-col lg:flex-row py-5 px-5 lg:px-20">
                <div className="flex flex-1 flex-col lg:flex-row">
                    <img className="size-64" src={drugFreesign} />
                    <div className="flex flex-col w-64">
                        <div className="font-bold text-white text-xl pt-5 lg:pt-10">
                            <span className="text-red-800">Trust</span> in Every
                            Scoop
                        </div>
                        <div className="text-base text-white">
                            Non-swabbale formulas for your peace of mind
                        </div>
                    </div>
                    <div className="flex flex-1"></div>
                    <div className="flex flex-col pl-0 lg:pl-10 w-64 items-start justify-start">
                        <div className="font-bold text-lg text-white pt-5 lg:pt-10">
                            Contact us
                        </div>
                        <div className="text-white flex flex-1 flex-row">
                            <EnvelopeIcon className="size-6 mr-2"/>{" "}
                            contact@company.com
                        </div>
                        <div className="text-white flex flex-1 flex-row">
                            <PhoneIcon className="size-6 mr-2" /> (999) 999 -
                            7999
                        </div>
                        <div className="text-white flex flex-1 flex-row">
                            <MapPinIcon className="size-8 mr-2" /> 794
                            Mcallister St San Francisco, 94102
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-col lg:flex-row mt-10">
                <div className="text-white text-sm">Copyright © 2024 The Trainer Locker</div>
                <div className="flex flex-1"></div>
                <div className="text-white text-sm">All Rights Reserved | Terms and Conditions | Privacy Policy</div>
            </div>
        </div>
    );
};

export default Footer;
