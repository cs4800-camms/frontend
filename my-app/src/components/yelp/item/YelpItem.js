import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./YelpItem.module.css";

export default function YelpItem({ business }) {
    return (
        <div className={`card  ${classes.card}`} style={{ width: "25rem" }}>
            <img src={business.image_url} class="card-img-top" alt={business.name} />
            <div class="card-body">
                <h2 class="card-title">{business.name}</h2>
                <p class="card-text">{business.location.display_address[0]} <br/> {business.location.display_address[1]}</p>
                <p class="card-text">Rating: {business.rating} <i class="bi bi-star-fill"></i> </p>
            </div>
        </div>
    )
}