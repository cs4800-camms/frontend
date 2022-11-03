import moment from 'moment';

export default function DayItem({day}) {

    return (
        <div key={day._id}>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        {moment(day.date).format("dddd, MMMM Do")}</button>
                </h2>
            </div>
        </div>
    );
    //                <i onClick={() => handleDayRemove(singleDay._id)} class="bi bi-trash"></i>
}