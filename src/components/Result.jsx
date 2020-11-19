import React, { useContext } from 'react'
import "./Markdown.css"
import ReactMarkdown from "react-markdown"
import MarkdownContext from '../MarkdownContext'
function Result() {
    const {markdowntext} = useContext(MarkdownContext)
    return (
        <div className="markdownreader">
            <div className="title">Result</div>
            <div className="textarea">
                <ReactMarkdown source={markdowntext} />
            </div>
        </div>
    )
}

export default Result
