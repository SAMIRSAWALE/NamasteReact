import { useSelector } from "react-redux";

const Total = () => {
    const cart_item = useSelector((item_list) => {
        return (item_list.cart.items)
    })
    let total = 0;
    cart_item.map((total_price) => {
        return (total += (total_price.count * total_price.price));
    })

    return (
        <div className="flex justify-center mt-10">
            <div className="bg-white shadow-lg rounded-2xl px-8 py-6 border">
                <p className="text-gray-500 text-sm">Cart Total</p>
                <h1 className="text-3xl font-bold text-gray-800">
                    ₹ {total}
                </h1>
            </div>
        </div>
    );

}
export default Total;