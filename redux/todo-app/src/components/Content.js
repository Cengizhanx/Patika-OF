import React from 'react'
import ContentFooter from './ContentFooter'
import TodoList from './TodoList'

function Content() {
    return (
        <>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <TodoList></TodoList>
            </section>
            <ContentFooter></ContentFooter>
        </>
    )
}

export default Content