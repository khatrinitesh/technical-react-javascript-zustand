import { create } from "zustand";
import axios from "axios";

const useStoreTwo = create((set) => ({
    users:[], // state for storing user data 
    loading:false, // state to track loading errors 
    error:null, // state to track any errors
    fetchUsers:async() => {
        set({
            loading:true,
            error:null
        });
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            set({users:response.data,loading:false})
        } catch (error) {
            set({error:error.message,loading:false})
        }
    }
}))

export default useStoreTwo;