import { useRef, useState } from "react";
import horseAnatomy from "/images/horse_anatomy.jpeg";
import Product from "../Products/Product";
import { ProductProps } from "../Products/types";

const products: ProductProps[] = [
    {
        title: "Product 1",
        description: "Description fot product 1",
        index: 0,
        price: 499,
    },
    {
        title: "Product 2",
        description: "Description fot product 2",
        index: 1,
        price: 300,
        dosage: 200,
    },
    {
        title: "Product 3",
        description: "Description fot product 3",
        index: 2,
        price: 500,
    },
];

const UseCases = () => {
    const ref = useRef<HTMLImageElement>(null);
    const [productId, setProductId] = useState(0);

    return (
        <div className="w-full flex flex-1 flex-col pt-10 pb-5 px-1 lg:px-20 mb-5 lg:mb-10">
            <div className="font-bold text-3xl lg:text-6xl py-2">
                <span className="text-red-800 ">Support</span> Your Horse, Head
                to Hoof
            </div>
            <div className="w-full lg:w-2/3 xl:w-1/3 text-base lg:text-xl py-2">
                Click to learn how our products enhance specific areas.
            </div>
            <div className="w-full flex flex-1 flex-col-reverse md:flex-col-reverse lg:flex-row">
                <div className="w-full h-full lg:w-52 flex flex-1 items-center justify-center py-1">
                    <Product 
                        index={products[productId].index}
                        title={products[productId].title}
                        description={products[productId].description}
                        price={products[productId].price}
                        dosage={products[productId]?.dosage}
                    />
                </div>
                <div className="flex flex-[2_2_0%] py-1">
                    <div className="relative">
                        <img
                            ref={ref}
                            className="object-fill -z-10 rounded-md"
                            src={horseAnatomy}
                            alt="horse-anatomy"
                        ></img>
                        <button
                            className={`absolute border-2 top-[22%] left-[75%] h-3 md:h-5 lg:h-10 w-3 md:w-5 lg:w-10 bg-slate-700 rounded-full opacity-65 hover:bg-opacity-35`}
                            onClick={() => setProductId(0)}
                        ></button>
                        <button
                            className={`absolute border-2 top-[63%] left-[59%] h-3 md:h-5 lg:h-10 w-3 md:w-5 lg:w-10 bg-slate-700 rounded-full opacity-65 hover:bg-opacity-35`}
                            onClick={() => setProductId(1)}
                        ></button>
                        <button
                            className={`absolute border-2 top-[45%] left-[35%] h-3 md:h-5 lg:h-10 w-3 md:w-5 lg:w-10 bg-slate-700 rounded-full opacity-65 hover:bg-opacity-35`}
                            onClick={() => setProductId(2)}
                        ></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UseCases;
