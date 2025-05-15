import React, { useState } from "react";
import UploadBox from "../../../../admin/src/Components/UploadBox";

const mockImageRecognition = (filename) => {
    const products = {
        turmeric: "Turmeric is a bright yellow spice known for anti-inflammatory and healing properties.",
        honey: "Honey is a natural sweetener with antibacterial benefits and energy-boosting power.",
        amla: "Amla is rich in Vitamin C and promotes immunity, digestion, and healthy skin.",
    };

    const lower = filename.toLowerCase();

    const match = Object.keys(products).find((key) => lower.includes(key));
    if (match) {
        return { name: match.charAt(0).toUpperCase() + match.slice(1), benefit: products[match] };
    } else {
        return { name: "Unknown", benefit: "No information available." };
    }
};

const ImageRecognition = () => {
    const [previews, setPreviews] = useState([]);
    const [recognized, setRecognized] = useState([]);

    const handleUploadSuccess = (uploadedUrls) => {
        const newRecognitions = uploadedUrls.slice(0, 5).map((url) => {
            const filename = url.split("/").pop(); // Get file name from URL
            return {
                url,
                ...mockImageRecognition(filename),
            };
        });

        setRecognized((prev) => [...prev, ...newRecognitions].slice(0, 5));
    };

    return (
        <div
            className="flex items-center justify-center h-screen bg-cover bg-center">
            <img src="/background_chat.jpeg" className='w-full fixed top-0 left-0 opacity-19' />

        
            <div className="flex w-full h-screen p-10 bg-gradient-to-br from-blue-100 to-pink-100">
                {/* 👈 Left side text */}
                <div className="flex-1 mr-4 rounded-xl p-6 shadow bg-white/40">
                    <h1 className="text-xl font-semibold mb-2">Upload an Image</h1>
                    <h3 className="text-gray-700">We'll tell you what it is and its benefits.</h3>
                </div>

                {/* 👉 Right side: Upload + Results */}
                <div className="flex-1 flex flex-col justify-start items-center bg-white/40 rounded-xl p-6 shadow">
                <div className="!mb-6">
                    <UploadBox
                        multiple={false}
                        name="images"
                        url="/api/product/uploadImages"
                        setPreviews={(newPreviews) => {
                            setPreviews((prev) => {
                                const combined = [...prev, ...newPreviews];
                                return combined.slice(0, 5); // Only keep first 5 previews
                            });
                        }}
                        onUploadSuccess={handleUploadSuccess}
                    />

                    {/* Show results */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        {recognized.map((item, index) => (
                            <div
                                key={index}
                                className="flex bg-white rounded-lg shadow p-4 items-center space-x-4"
                            >
                                <img
                                    src={item.url}
                                    alt={item.name}
                                    className="w-16 h-16 object-cover rounded-full"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800">{item.name}</p>
                                    <p className="text-sm text-gray-600">{item.benefit}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ImageRecognition;
