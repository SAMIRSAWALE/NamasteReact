import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount, removeItem } from "../utils/cartSlice";
import Total from "./item_total";

const Cart = () => {
    const cart_items = useSelector((store) => store.cart.items);
    console.log("cart item", cart_items)

    const dispatch = useDispatch();
    //remove the item
    function handleRemove(name) {
        dispatch(removeItem(name));
    }

    // increment the count
    function handleIncrementCount(name) {
        dispatch(incrementCount({name}));
    }
     function handleDecrementCount(name) {
        dispatch(decrementCount({name}));
    }




    const count = 1;
    if (!cart_items.length) {
        return (
            <div className="flex items-center justify-center h-[60vh]">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Your Cart is Empty</h1>
                    <p className="text-gray-500 mt-2">
                        Looks like you haven’t added anything yet.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Shopping Cart</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cart_items.map((item, index) => {
                    return (
                        <div key={index}>
                            <div
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 border border-gray-100"
                            >
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {item.name}
                                </h2>
                                <p className="text-gray-500 text-sm mt-2">
                                    {item.discription}
                                </p>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-lg font-bold text-indigo-600">
                                        ₹{item.price}
                                    </span>
                                    <button onClick={() => { handleRemove(item.name) }} className="px-3 py-1 text-sm bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition">
                                        Remove
                                    </button>
                                    <button onClick={() => { handleIncrementCount(item.name) }}>
                                        ➕
                                    </button>
                                    <button onClick={() => { handleDecrementCount(item.name) }}>
                                        ➖
                                    </button>

                                    <h5>
                                        x {item.count}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Total />
        </div>
    );
};

export default Cart;









