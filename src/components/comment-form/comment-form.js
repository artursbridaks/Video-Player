import React, { useState } from 'react';
import './comment-form.css'

const CommentForm = () => {
  const initialFormData = {
    name: '',
    comment: '',
  }

  const [formData, setFormData] = useState(initialFormData)
  const [comments, setComments] = useState([])

  const submitForm = (e) => {
    e.preventDefault()
    setComments([...comments, formData])
    setFormData({ ...initialFormData })
  }

  return (
    <div className="col-xs-4">
      <form action="" className="form">
        <h3>Comment section:</h3>
        <label htmlFor="name">Name:</label> <br />
        <input
          className="enter-name"
          type="text"
          placeholder="Enter your name..."
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          autoComplete="off"
          required
        />

        <br /><br />
        <label htmlFor="comment">Comment:</label> <br />
        <textarea
          className="enter-comment"
          rows="3"
          cols="30"
          id="comment"
          value={formData.comment}
          placeholder="Enter your comment..."
          required
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
        ></textarea>
        <br /><br />
        <button type="submit" class="submit-button" onClick={submitForm}>
          Add comment
      </button>
      </form>

      {comments.map(({ name, comment }) => (
        <div className="results">
          <h4>{name} commented:</h4>
          <p>{comment}</p>
        </div>
      ))}
    </div>
  )
}

export default CommentForm
