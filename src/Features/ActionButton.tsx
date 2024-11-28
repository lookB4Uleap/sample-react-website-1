import { ArrowRightIcon } from '@heroicons/react/24/outline';

const ActionButton = () => {
    return (
        <button className='flex w-48 my-2 p-2 lg:px-3 lg:py-3 bg-red-800 hover:bg-red-950 text-cyan-100 items-center justify-center rounded-full'>Get Race Ready <ArrowRightIcon className='size-6 ml-5' /></button>
    );
}

export default ActionButton;