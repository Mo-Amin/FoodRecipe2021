// export default App;
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "../App.css";
export default class CaloricMaintanence extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='centerForm'>
                    <h1>Calorie Calculator</h1>
                    <form>
                        {/* Source: https://getbootstrap.com/docs/5.0/forms/overview/ --> All of them from bootstrap All copy & paste*/}
                        {
                            /*
                            Not a fan of the <h6 tag> for each section (Age, Gender, Height, etc) but not sure how else to approach it. 
                            */
                        }
                        {/* This is Age 
                            Not sure how to change the size of the input group. It takes the whole line which is much different from the prototype design
                        */}
                        <div class="mb-3">
                            <label for="age" class="form-label"><strong>Age</strong></label>
                            <input type="number" class="form-control" id="age" placeholder='Years'/>
                        </div>
                        {/* This is Gender */}
                        <h6><strong>Gender</strong></h6>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="gender" id="male" />
                            <label class="form-check-label" for="male">Male</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="gender" id="female"/>
                            <label class="form-check-label" for="female">Female</label>
                        </div>
                        {/* This is height 
                        */}
                        <h6><strong>Height</strong></h6>
                        <div class="input-group">
                            <input type="text" aria-label="feet" class="form-control" placeholder="feet"/>
                            <input type="text" aria-label="inches" class="form-control" placeholder="inches"/>
                        </div>
                        {/* This is weight */}
                        <div class="mb-3">
                            <label for="weight" class="form-label"><strong>Weight</strong></label>
                            <input type="number" class="form-control" id="weight" placeholder='lbs'/>
                        </div>
                        {/* This is Physical Activity Level
                            Not sure how to get rid of 'Choose Option' once user clicks the drop-down
                            It was the same in Bootstrap docs
                        */}
                        <h6><strong>Physical Activity Level</strong></h6>
                        <select class="form-select" aria-label="Physical Activity Level drop-down">
                            <option selected>Choose Option</option>
                            <option value="sedentary">Sedentary</option>
                            <option value="moderatelyActive">Moderately Active</option>
                            <option value="vigorouslyActive">Vigorously Active</option>
                            <option value="extremelyActive">Extremely Active</option>
                        </select>
                        {/* This is Goal 
                            Not sure why the text is far away from the radio button
                        */}
                        <h6><strong>Goal</strong></h6>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="goal" id="surplus"/>
                            <label class="form-check-label" for="surplus">
                                Surplus
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="goal" id="deficit"/>
                            <label class="form-check-label" for="deficit">
                                Deficit
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="goal" id="maintainWeight"/>
                            <label class="form-check-label" for="maintainWeight">
                                Maintain weight
                            </label>
                        </div>
                        {/* This is submit */}
                        <button type="submit" class="mt-3 btn btn-primary">Submit</button>

                    </form>
                </div>
            </React.Fragment>
        )
    }
}