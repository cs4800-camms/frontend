export default function ActivityItem({ activity, remove }) {
    return (
        <div key={activity._id}>
            <li
                class="list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                <div class="d-flex align-items-center">
                    <div class="row">
                    <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
                                  <i class="fas fa-times text-primary"></i>
                    </a>

                        <p>{activity.name}</p>
                    </div>
                </div>
                <i onClick={() => remove(activity._id)} class="bi bi-x"></i>
            </li>
        </div>
    );
}