import "bootstrap/dist/css/bootstrap.min.css";

export default function TripItem(props) {
    return (
        <div class="text-center">
    
            <div>
                <img src={props.image} class="img-fluid" alt={props.title} />
                <h5>{props.title}</h5>
            </div>
    </div>

    );
}