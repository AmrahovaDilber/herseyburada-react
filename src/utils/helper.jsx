import { toast } from "react-toastify";

export const notification = (msg, type = 'success') => {
    toast[type](msg);
};
