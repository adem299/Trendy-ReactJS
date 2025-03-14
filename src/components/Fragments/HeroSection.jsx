import Button from "../Elements/Button";


const Card = ({ children, className }) => {
    return (
        <div className={`bg-white shadow-lg rounded-2xl p-4 ${className}`}>{children}</div>
    );
}

const CardContent = ({ children }) => {
    return <div className="p-4">{children}</div>;
}

const HeroSection = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
            <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg p-6">

                {/* Hero Section */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-4xl font-bold my-8">
                            Elevate Your Style with <br /> Trendy Style
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Discover the perfect blend of comfort and fashion with
                            <span className="font-semibold"> our latest collection of premium clothes.</span>
                        </p>
                        <Button className="bg-black text-white px-10 py-2 rounded-full">Shop Now →</Button>
                    </div>
                    <Card className="bg-gradient-to-br from-blue-500 to-purple-500 p-6 rounded-2xl text-white">
                        <CardContent>
                            <div className="flex justify-between items-center ">
                                <div>
                                    <span className="bg-white text-black px-2 py-1 rounded-full text-sm">100% Cotton Fabric</span>
                                    <h3 className="text-2xl font-semibold mt-4">Trendy Oversized T-Shirt</h3>
                                    <p className="text-sm mt-2">Soft, breathable, and perfect for any occasion.</p>
                                    <p className="text-xl font-bold mt-4">$29.99</p>
                                    <Button className="mt-4 text-black bg-white px-4 py-2 rounded-full">View More →</Button>
                                </div>
                                <div className="w-5/6 h-4/6">
                                    <img
                                        src="/images/banner.png"
                                        alt="T-Shirt Banner"
                                        className="w-auto h-auto"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}

export default HeroSection;