import {AbstractControl} from "@angular/forms";
export function passwordMatch(password:string,confirm_password:string)
{
    return function(form:AbstractControl){
        const passwordValue = form.get(password)?.value
        const confirmePasswordValue = form.get(confirm_password)?.value

        if(passwordValue === confirmePasswordValue){
            return null;
        }
        return {passwordMismatchError: true}
    }
}