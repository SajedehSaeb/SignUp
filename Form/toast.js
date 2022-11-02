import { toast } from 'react-toastify';

export const notify = (text , type) => {
    if(type === "success"){
        toast.success(text , {
            theme : 'colored',
            style : {
                fontFamily : 'B nazanin'
            }
        })
    }else {
        toast.error(text , {
            theme : 'colored',
            style : {
                fontFamily : 'B nazanin'
            }
        })
    }
};
  