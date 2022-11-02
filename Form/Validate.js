
export const Validate = data => {
    const errors = {}

    if ( !data.name.trim() ) {                       //Empty String
        errors.name = "لطفا فیلد نام را وارد کنید" ;
    } else {
        delete errors.name;
    }

    
    if ( !data.email.trim() ) {                       //Empty String
        errors.email = "لطفا فیلد ایمیل را وارد کنید" ;
    } else if (!/\S+@\S+\.\S+/.test(data.email)){   //Email
        errors.email = " ایمیل صحیح وارد کنید"    
    } else {
        delete errors.email;
    }

    if ( !data.password.trim()) {           
        errors.password = "لطفا فیلد پسورد را وارد کنید" ;
    } else if(data.password.length < 6) {
        errors.password = "پسورد حداقل 6 کاراکتر باشد" ;
    }else {
        delete errors.password;
    }

    if ( !data.confirmPassword.trim() ) {                       //Empty String
        errors.confirmPassword = "لطفا فیلد را وارد کنید" ;
    } else if(data.confirmPassword !== data.password) {
        errors.confirmPassword = "با پسورد مطابقت ندارد"
    }else {
        delete errors.confirmPassword;
    }

    if ( !data.isAccept ) {                       //Empty String
        errors.isAccept = "قوانین را مطالعه کنید"
    } else {
        delete errors.isAccept;
    }

    return errors;
};
