import axios from 'axios';
import React, { useState } from 'react'

const ImageRecognition = () => {

    const [image, setImage] = useState(null);
    const [result, setResult] = useState(null);

    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);

        try {
            const res = await axios.post("http://localhost:8000/api/image/predict", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            setResult(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl mb-4">Upload Image for Identification</h2>
            <form onSubmit={handleUpload}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <button type="submit" className="btn btn-primary ml-2">Upload</button>
            </form>

            {result && (
                <div className="mt-4">
                    <h3>Result:</h3>
                    <p><strong>Name:</strong> {result.name}</p>
                    <p><strong>Origin:</strong> {result.origin}</p>
                    <p><strong>Uses:</strong> {result.uses}</p>
                </div>
            )}
        </div>
    );
}

export default ImageRecognition
