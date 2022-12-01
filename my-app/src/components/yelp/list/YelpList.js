import YelpItem from "../item/YelpItem";
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalContext from '../../../context/global';

export default function YelpList() {
    const { businesses } = useContext(GlobalContext);

    return (
        <div>
            <br></br>
            {businesses.map((business) => (
                <YelpItem key={business.id} business={business}/>
            ))}
        </div>
    );
}