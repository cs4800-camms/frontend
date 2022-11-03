import "bootstrap/dist/css/bootstrap.min.css";
import "./ItineraryPage.css"

export default function ItineraryPage() {
    return (
        <body>
            <h1>Plan Your Trip</h1>
            <br></br><br></br>
            <div class="row">
                <div class="col">
                    <div class="accordion" id="accordionPanelsStayOpenExample">

                      <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Accordion Item #1
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                          <div class="accordion-body">
                            <ul class="list-group mb-0">
                              <li
                                class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                                <div class="d-flex align-items-center">
                                  <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                  Cras justo odio
                                </div>
                                <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
                                  <i class="fas fa-times text-primary"></i>
                                </a>
                              </li>
                              <li
                                class="list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                                <div class="d-flex align-items-center">
                                  <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                  Porta ac consectetur ac
                                </div>
                                <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
                                  <i class="fas fa-times text-primary"></i>
                                </a>
                              </li>
                            <button type="button" class="btn btn-primary">Deleted Selected</button>
                            <button type="button" class="btn btn-primary" style={{marginLeft: '3rem'}}>Add Activity</button>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Accordion Item #2
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                          <div class="accordion-body">

                          </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Accordion Item #3
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                          <div class="accordion-body">

                          </div>
                        </div>
                      </div>

                    </div>
                </div>



                <div className="col">
                    <h2>Activity Suggestions</h2>
                </div>
            </div>
        </body>
    );
}