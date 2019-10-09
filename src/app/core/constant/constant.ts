
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
    private year : string[] = ["2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030","2031","2032","2033","2034","2035","2036","2037"];
    private month : string[] = ["January","Februray","March","April","May","June","July","August","September","October","November","December"];
   
    userTypeData(){
        return this.userType;
    }
    listYear(){
        return this.year;
    }
    listMonth(){
        return this.month;
    }
}