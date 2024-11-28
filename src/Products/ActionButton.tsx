import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ActionButtonProps } from "./types";
import { colors } from "./utils";


const N = colors.length;

const ActionButton = ({ index = 0, hovering }: ActionButtonProps) => {
    return (
        <button className={`flex px-3 py-1 text-base border-2 ${colors[index%N].border} ${hovering ? `${colors[index%N].background} text-white` : colors[index%N].text}  items-center justify-center rounded-full`}>
            Shop Now <ArrowRightIcon className="size-6 ml-1" />
        </button>
    );
};

export default ActionButton;
