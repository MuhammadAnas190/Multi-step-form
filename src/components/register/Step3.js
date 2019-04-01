import React from "react"

class Step3 extends React.Component {
    render() {
        if (this.props.currentStep !== 3) { // Prop: The current step
            return null
        }
        // The markup for the Step 1 UI
        return(
            <div className="form-group">
                <label htmlFor="email">Password</label>
                <input
                    className="form-control"
                    id="password"
                    name="password"
                    type="text"
                    placeholder="Enter Password"
                    value={this.props.password} // Prop: The email input data
                    onChange={this.props.handleChange} // Prop: Puts data into state
                />
            </div>
        )
    }
}
export default Step3;