import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

export const postData = async (url, formData) => {
//     const token = localStorage.getItem("accesstoken");
//   console.log("Token from localStorage:", token); // ✅ Add this line

    try {
        const response = await fetch(apiUrl + url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("accesstoken")}`, // include our API key in the authorization
                'Content-Type': 'application/json',  // Adjust the content type as needed
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            const errorData = await response.json();
            return errorData;
        }

    } catch (error) {
        console.log('Error:', error);

    }
}


export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(apiUrl + url, { 
                'Authorization': `Bearer ${localStorage.getItem("token")}`, // include our API key in the authorization
                'Content-Type': 'application/json',  // Adjust the content type as needed
                
            })
            return data;
        

    } catch (error) {
        console.log(error);
        return error;
    }
}