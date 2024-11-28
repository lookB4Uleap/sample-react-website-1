import Product from "./Product";

const products = [1,2,3,4,5,6,7];

const ScrollableList = () => {

    return (
        <div className="flex justify-between overflow-hidden w-screen no-scrollbar py-5 px-5 lg:px-20">
            <div className="flex w-full overflow-scroll [&>div]:flex-shrink-0 no-scrollbar">
                {
                    products.map((_: number, index: number) =>
                        <Product key={index} index={index} />
                    )
                }
            </div>
        </div>
    );
};

export default ScrollableList;
