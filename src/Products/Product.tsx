import { useState } from "react";
import ActionButton from "./ActionButton";
import { ProductProps } from "./types";
import { colors } from "./utils";

const N = colors.length;

const Product = ({
    index = 0,
    imageUrl = "https://placehold.co/700x700",
    title = "Title",
    description = "This the product description. This how the product is described.",
    price = 299,
    dosage = 1000,
}: ProductProps) => {
    const [hovering, setHovering] = useState<boolean>(false);

    return (
        <div className={`flex flex-col p-5 mx-2 border-2 ${hovering ? colors[index%N].border : "border-inherit"} rounded-xl w-80 items-center hover:cursor-pointer`}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <img className="w-56 rounded-t-xl pb-3" src={imageUrl} alt="product" />
            <div className={`w-full flex-1 py-3 font-medium  ${hovering ? colors[index%N].text : "text-inherit"} text-3xl items-start`}>{title}</div>
            <div className="w-full flex-1 pb-3 text-base">{description}</div>
            <div className="w-full flex-1 flex flex-row justify-between items-center">
                <div className="flex flex-col">
                    <div className={`font-extrabold text-3xl ${colors[index%N].text}`}>${price}</div>
                    <div className="bg-slate-200 rounded-md px-1 font-extralight">${(+price/+dosage).toFixed(2)} per day</div>
                </div>
                <ActionButton index={index} hovering={hovering} />
            </div>
        </div>
    );
};

export default Product;
