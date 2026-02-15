const User = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">

            <div className="bg-white shadow-2xl rounded-3xl p-10 w-[380px] border">

                {/* Avatar */}
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                        S
                    </div>

                    <h1 className="text-2xl font-bold mt-4 text-gray-800">
                        Samir
                    </h1>

                    <p className="text-gray-500 text-sm">
                        Software Engineer
                    </p>
                </div>

                {/* Divider */}
                <div className="border-t my-6"></div>

                {/* Details */}
                <div className="space-y-3 text-gray-700">

                    <div className="flex justify-between">
                        <span className="text-gray-500">📍 Address</span>
                        <span className="font-medium">Nashik</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">💼 Experience</span>
                        <span className="font-medium">1 YOE</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">📞 Contact</span>
                        <span className="font-medium">7620280779</span>
                    </div>

                </div>

                {/* Button */}
                <button className="w-full mt-8 bg-indigo-500 hover:bg-indigo-600 transition-all text-white font-semibold py-3 rounded-xl shadow-lg">
                    View Profile
                </button>

            </div>

        </div>
    );
};

export default User;
