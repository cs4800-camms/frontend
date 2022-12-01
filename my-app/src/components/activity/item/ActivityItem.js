import { useState } from "react";

export default function ActivityItem({ activity, remove, check }) {
    return (
        <div key={activity._id}>
            <li
                class="list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                <div class="form-check d-flex align-items-center">
                    <div class="row">
                        <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
                        <i class="fas fa-times text-primary"></i>
                        </a>

                        <div class="form-check active">
                        <input class="form-check-input" name="checked" type="checkbox" checked={activity.checked} onChange={() => check(activity._id)} />
                        <label class="form-check-label" for="flexCheckDefault">
                            <p>{activity.name}</p>
                        </label>
                        </div>
                    </div>
                </div>
                <i onClick={() => remove(activity._id)} class="bi bi-x"></i>
            </li>
        </div>
    );
}