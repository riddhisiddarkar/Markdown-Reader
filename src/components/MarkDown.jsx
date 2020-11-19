import MarkdownContext from "../MarkdownContext"
import "./Markdown.css"
import { useContext } from "react"

function MarkDown() {
    const {setMarkdowntext } = useContext(MarkdownContext);
    const onInputChange = (e) => {
        const newValue = e.currentTarget.value;
        setMarkdowntext(newValue)
    }
    return (
        <div className="markdownreader">
            <div className="title">Markdown text</div>
                <textarea onChange={onInputChange} className="textarea" />
        </div>
    )
}

export default MarkDown
