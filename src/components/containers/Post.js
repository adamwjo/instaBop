import React, { Component } from 'react'
import { Form } from '../presentational/Form'
import { Comment } from '../presentational/Comment'

const staticComments = [
    {id:1, text: "Whatever happens, happens."},
    {id:2, text: "Hackers are nerdy, pasty, tubby, little geeks with triple thick glasses and this is probably a demented otaku with smelly feet."},
    {id:3, text: "Angels banished from heaven have no choice but to become devils"},
    {id:4, text: "I'm watching a dream I'll never wake up from"},
    {id:5, text: "Bang..."}
]

export default class Post extends Component {

    state = {
        commentText: "",
        comments: staticComments
    }

    captureText = (commentText) => this.setState({ commentText: commentText })

    submitHandler = (event) => {
        event.preventDefault()

        let newComment = {
            text: this.state.commentText
        }
        
        this.setState({
            comments: [...this.state.comments, newComment]
        })
        event.target.reset()
    }
    

    render() {
        return (
            <div className="card p-1" style={{maxWidth: "25rem", minHeight:"45rem"}}>
                <h5 className="card-header">adamwjo</h5>
                <img src="https://aramajapan.com/wp-content/uploads/2014/10/aramajapan_cowboy-bebop.jpg" className="card-img-top" alt=""/>
                <div className="card-body mb-3">
                    <h5 className="card-title">Me n the fam</h5>
                    <p className="card-text">#seeYouLaterSpaceCowBoy</p>
                    <ul className="list-group list-group-flush">
                        {this.state.comments.map(comment => <Comment key={comment.id} commentData={comment}/>)}
                    </ul>
                    <div className="card-footer mt-5">
                        <Form 
                        submitHandler={this.submitHandler}
                        captureText={this.captureText} />
                    </div>
                </div>
            </div>
            
        )
    }
}
