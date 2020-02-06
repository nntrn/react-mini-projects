import React from 'react'
import SvgIcon from '../../components/SvgIcon'

import './todo.scss'

const DeleteIcon = props => {
  return (
    <SvgIcon viewBox="0 0 840 840" {...props} className="hover-opacity">
      <path d="M420 0c116 0 215 41 297 123s123 181 123 297-41 215-123 297-181 123-297 123-215-41-297-123S0 536 0 420s41-215 123-297S304 0 420 0m86 420l154-154-86-86-154 152-152-152-88 86 154 154-154 152 88 86 152-152 154 152 86-86-154-152" />
    </SvgIcon>
  )
}

const SubmitIcon = props => {
  return (
    <SvgIcon viewBox="0 0 40 28" {...props} className="hover-opacity">
      <path d="M24 8H0v4h24V8zm0-8H0v4h24V0zm8 16V8h-4v8h-8v4h8v8h4v-8h8v-4h-8zM0 20h16v-4H0v4z" />
    </SvgIcon>
  )
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      text: '',
    }

    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.markItemCompleted = this.markItemCompleted.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
  }

  handleTextChange(event) {
    this.setState({
      text: event.target.value,
    })
  }

  handleAddItem(event) {
    event.preventDefault()

    var newItem = {
      id: Date.now(),
      text: this.state.text,
      done: false,
      dateCompleted: '',
    }

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '',
    }))
  }

  markItemCompleted(itemId) {
    var updatedItems = this.state.items.map(item => {
      if (itemId === item.id) {
        item.done = !item.done
        item.dateCompleted = item.done ? new Date().toLocaleString() : ''
      }
      return item
    })

    this.setState({
      items: [].concat(updatedItems),
    })
  }

  handleDeleteItem(itemId) {
    var updatedItems = this.state.items.filter(item => {
      return item.id !== itemId
    })

    this.setState({
      items: [].concat(updatedItems),
    })
  }

  render() {
    return (
      <div id="todo">
        <form>
          <input type="text" onChange={this.handleTextChange} value={this.state.text} />
          <button onClick={this.handleAddItem} className="submit" disabled={!this.state.text}>
            <SubmitIcon size="20" />
          </button>
        </form>
        <TodoList
          items={this.state.items}
          onItemCompleted={this.markItemCompleted}
          className={this.markItemCompleted}
          onDeleteItem={this.handleDeleteItem}
        />
      </div>
    )
  }
}

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.markCompleted = this.markCompleted.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  markCompleted() {
    this.props.onItemCompleted(this.props.id)
  }

  deleteItem() {
    this.props.onDeleteItem(this.props.id)
  }

  render() {
    return (
      <li id={'task-' + this.props.id} className={this.props.completed ? 'done' : 'undone'}>
        <div onClick={this.markCompleted} className="flex-column">
          <span className="task-item">{this.props.text}</span>
          <span className="completed-date">{this.props.dateCompleted}</span>
        </div>
        <button type="button" className="delete" onClick={this.deleteItem}>
          <DeleteIcon size="15" />
        </button>
      </li>
    )
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.items.map(item => (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            completed={item.done}
            dateCompleted={item.dateCompleted}
            onItemCompleted={this.props.onItemCompleted}
            onDeleteItem={this.props.onDeleteItem}
          />
        ))}
      </ul>
    )
  }
}

export default TodoApp
