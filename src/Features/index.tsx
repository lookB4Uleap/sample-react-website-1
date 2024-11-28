import ActionButton from "./ActionButton";
import img1 from "/images/39554.svg";
import img2 from "/images/image.svg";

const Features = () => {
    return (
        <div className="flex flex-1 flex-col py-5 px-5 lg:px-10">
            <div className="flex flex-1 flex-col-reverse lg:flex-row items-center justify-between px-3 lg:px-10 py-5 lg:py-10">
                <div className="flex flex-1 flex-col mr-3">
                    <div className="font-bold text-2xl lg:text-4xl py-1 lg:py-3">
                        Uniquely formulated for horse trainers
                    </div>
                    <div className="font-bold text-3xl lg:text-6xl py-1 lg:py-3 text-red-800">
                        Who Want to Win
                    </div>
                    <div className="text-base lg:text-xl py-1 lg:py-3">
                        From joint health to muscle strength, our products keep
                        your horse fit, fast, and ready to win. With advanced
                        formulations trusted by top trainers, you can push past
                        the competition and achieve the results you’ve been
                        aiming for.
                    </div>
                    <ActionButton />
                </div>
                <div className="flex flex-1 py-2">
                    <img
                        className="object-fill "
                        src={img1}
                        alt="Horse Riding"
                    />
                </div>
            </div>
            <div className="flex flex-1  flex-col lg:flex-row items-center justify-between px-3 lg:px-10 py-5 lg:py-10">
                <div className="flex flex-1 py-2">
                    <img
                        className="object-fill"
                        src={img2}
                        alt="Horse Racing"
                    />
                </div>
                <div className="flex flex-1 flex-col ml-3">
                    <div className="font-bold text-2xl lg:text-4xl py-1 lg:py-3">
                        Natural
                    </div>
                    <div className="font-bold text-3xl lg:text-6xl py-1 lg:py-3 text-red-800">
                        Bleeder Remedy
                    </div>
                    <div className="text-base lg:text-xl py-1 lg:py-3">
                        While more than 95% of racehorses experience
                        exercise-induced pulmonary haemorrhage (EIPH), commonly
                        known as bleeders, you want to avoid exposing them to
                        side effects like dehydration from potent drugs. TTL's
                        BleederShield can help strengthen capillaries in the
                        lungs, reduce oxidative stress, and improve blood flow.
                    </div>
                    <ActionButton />
                </div>
            </div>
        </div>
    );
};

export default Features;
