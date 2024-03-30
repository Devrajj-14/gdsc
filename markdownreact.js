import React, { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import ReactQuill from 'react-quill'; // Import ReactQuill
import 'react-quill/dist/quill.snow.css'; // Include the Quill editor's styles

import './style.css'; // Your custom CSS
import 'boxicons'; // Icons library

const MarkdownReact = () => {
    const [markdown, setMarkdown] = useState(""); // State to hold the markdown input

    return (
        <div>
            {/* Markdown Editing and Preview Console */}
            <div className='center-div'>
                <div className='left-side'>
                    <p>Edit</p>
                    <ReactQuill value={markdown} onChange={setMarkdown} />
                </div>
                <div className="right-side">
                    <p>Preview</p>
                    <Markdown>{markdown}</Markdown> {/* Render the markdown input as HTML */}
                </div>
            </div>

            {/* Footer */}
            <div className="footer">
                <div className="footer-text">
                    <p>Copyright &copy; 2024 by Devraj Goswami | All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default MarkdownReact;
