import React from 'react'

export const Form = (props) => {
    return (
        <form onSubmit={(e) => {props.submitHandler(e)}} >
             <div className="form-group">
                <label htmlFor="commentInput">Comment:</label>
                <input onChange={(e) => {props.captureText(e.target.value)}} type="text" className="form-control" id="commentInput" placeholder="enter text here..."/>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}
