
import { environment } from '../../../environments/environment';

export const apiPath = environment.baseUrl;

export const UrlConstantsUrl = {
    demandServices: {
        urlSearchSingle  : `${apiPath}demands/`
    }
}
export const ContactUsData = {
    contactUs : {
        contactNumber : "+91 123 4567890 , +91 123 4567899",
        firstOfficeLocation : "Magarpatta Tower 5 Level 4, Pune, Maharastra",
        secondOfficeLocation : "BusinessBay Level 7, pune, Maharastra, India",
        email : "https://blackfoot@db.com , https://blackfoot@gmail.com"
    }
}
export class Constant{
    private userType : string[] = ["Individual","Small Business","Large Buisness","Product Based"];
    userTypeData(){
        return this.userType;
    }
}