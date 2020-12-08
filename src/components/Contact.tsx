import * as React from 'react'

// @ts-ignore
function Contact(props) {
    const {phoneContact} = props
    return (
        <div>
            <div className="test">
                <span className="span_name">{phoneContact}</span>
            </div>
        </div>
    )
}

export default Contact