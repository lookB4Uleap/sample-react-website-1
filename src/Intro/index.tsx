import { useState } from "react";
import IntroBackground from "./IntroBackground";

const Intro = () => {
    const [_, setHeight] = useState<number | null | undefined>(null);

    return (
        <>  
            <IntroBackground
                updateHeight={(height?: number) => setHeight(height)}
            />
            {/* {height && ( */}
                <div
                    className="flex h-screen w-full flex-col items-start justify-center text-gray-50 px-10 lg:px-20"
                    // style={{ height: height*1.1 }}
                >
                    <div className="text-xs lg:text-xl">
                        MICROSECONDS MATTER
                    </div>
                    <div className="text-base lg:text-7xl pr-8 my-3 lg:my-10">
                        Win your horse race with TTL Supplements
                    </div>
                    <div className="text-xs lg:text-xl lg:pr-8 my-2">
                        Scientifically formulated racehorse supplements from the
                        home of champions
                    </div>
                    <button className="rounded-full px-10 py-3 bg-red-800 hover:bg-red-950">
                        Discover
                    </button>
                </div>
            {/* )} */}
        </>
    );
};

export default Intro;
