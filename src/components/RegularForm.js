import React from 'react'

function RegularForm() {
    return (
        <div className='regularForm'>
            <form>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
        </div>
    )
}

export default RegularForm
