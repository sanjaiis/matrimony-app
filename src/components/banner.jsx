export default function Banner() {
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat h-[400px] md:h-[500px] flex items-center justify-center"
            style={{
                // backgroundImage: `url('/images/banner_image')`, // Replace with your image path
                backgroundImage: `url('/images/banner_image.jpeg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",// backgroundImage: `url('/images/banner_image.jpg')`,
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50" />

            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Perfect Match</h1>
                <p className="text-lg md:text-2xl mb-6">
                    Join thousands who've found love on Matrimony Magic ❤️
                </p>
                <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all">
                    Get Started
                </button>
            </div>
        </div>
    );
}
