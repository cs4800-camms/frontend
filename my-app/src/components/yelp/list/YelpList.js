import YelpItem from "../item/YelpItem";
import "bootstrap/dist/css/bootstrap.min.css";

export default function YelpList({businesses}) {
    return (
        <div>
        {businesses.map((business) => (
            <YelpItem key={business.id} business={business}/>
           
        ))}
        </div> 

    );
}