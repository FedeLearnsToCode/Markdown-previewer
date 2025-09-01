const App = () => {
    const initialMarkdown = `# Typography
# H1 Heading 
(use # before text)
## H2 Heading 
(use ## before text)
### H3 Heading 
(use ### before text)
#### H4 Heading 
(use ### before text)
##### H5 Heading 
(use ### before text)
###### H6 Heading 
(use ### before text)

**Bold text** (use **double asterisks** or __double underscores__)
_Italic text_ (use *single asterisks* or _single underscores_)
**_Bold and Italic_** (combine both)
~~Strikethrough~~ (use double tildes)

Inline code: \`<div></div>\` (wrap code with single backticks)

---

# Lists

- Unordered list item (use - or * or +)
- Nested unordered item
    - Another nested item

1. Ordered list item (just use numbers)
2. Second item
3. Third item

---

# Blockquotes

> This is a blockquote (use > before the line)

---

# Code Blocks

\`\`\`
// Multi-line code block
function greet() {
console.log("Hello, world!");
}

(write your code between 3 backticks)
\`\`\`

---

# Tables

| Header 1    | Header 2    | Header 3    |
| ----------- | ----------- | ----------- |
| Row 1 Col 1 | Row 1 Col 2 | Row 1 Col 3 |
| Row 2 Col 1 | Row 2 Col 2 | Row 2 Col 3 |

---

# Links and Images

[This is a link](https://www.freecodecamp.org)  
(use text between [ ] and URL between ( ) )

![Alt text for image](https://via.placeholder.com/100)  
(write alt between ![ ] and URL between ( ) )

---

# Extra

Line breaks are made by ending a line with two spaces.  
Like this line  
breaks here.
    `;

    const [text, setText] = React.useState(initialMarkdown);
    const handleChange = (e) => {
        setText(e.target.value);
    };

    const rawHtml = marked.parse(text, {breaks: true});
    const sanitizedHtml = DOMPurify.sanitize(rawHtml);

    const [copied, setCopied] = React.useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true);
                setTimeout(()=> setCopied(false), 2000);
            })
    };

    const [darkMode, setDarkMode] = React.useState(false);
    React.useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);


    return (
        <>
            <div className="text-end mt-3">
                <button onClick={() => setDarkMode(!darkMode)} className="btn p-0 border-0 bg-transparent" style={{ marginBottom: '1rem' }}>
                {darkMode 
                    ? <i className="fa-solid fa-circle" style={{ color: '#fafafa' }}></i>
                    : <i className="fa-solid fa-circle" style={{ color: '#3c3c3c' }}></i>}
                </button>
            </div>
            <h1 className='text-center display-3 pt-4 fw-normal fade-in-up'>#MARKDOWN.md</h1>
            <h2 className='text-center lead fw-light pb-5 fade-in-up' style={{ animationDelay: '0.5s' }}>See your Markdown come to life</h2>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <div className="d-flex align-items-center justify-content-between fade-in-up" style={{ animationDelay: '1s' }}>
                        <h3>Editor</h3>
                        <div className="d-flex align-items-center" style={{ position: 'relative', display: 'inline-block' }}>
                            <button className="btn p-0 border-0 bg-transparent" style={{ top: '3%', right: '5%'}} onClick={handleCopy} title="Copy text">
                                <i className="fa-solid fa-copy fs-4 text-secondary"></i>
                            </button>
                            {copied && (
                                <div
                                style={{
                                    position: 'absolute',
                                    top: '100%',
                                    right: '0%',
                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                    color: 'white',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    fontSize: '0.8rem',
                                }}
                                >
                                Copied
                                </div>
                            )}
                            <button className="btn p-0 border-0 bg-transparent ms-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#infoOffcanvas" aria-controls="infoOffcanvas" >
                                <i className="fa-solid fa-circle-info fs-4 text-secondary"></i>
                            </button>
                        </div>
                    </div>               
                    <textarea
                    className='w-100 p-4 border border-dark rounded fade-in-up'
                    style={{ animationDelay: '1s' }}
                    id="editor"
                    value={text}
                    onChange={handleChange}
                    rows={20}
                    >
                    </textarea>
                </div>
                <div className='col-12 col-md-6'>
                    <h3 className="fade-in-up" style={{ animationDelay: '1.5s' }}>Preview</h3>
                    <div
                    className='p-4 border border-dark rounded fade-in-up'
                    style={{ minHeight: '320px', animationDelay: '1.5s' }}
                    id="preview"
                    dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
                    ></div>
                </div>
            </div>
            <div className="offcanvas offcanvas-end" tabIndex='-1' id="infoOffcanvas" aria-labelledby="infoOffcanvasLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id='infoOffcanvasLabel'>Markdown Quick Reference:</h5>
                    <button className="btn-close text-reset" data-bs-dismiss='offcanvas' aria-label='Close'></button>
                </div>
                <div className="offcanvas-body">
                    <ul>
                        <li><code>#</code> = H1</li>
                        <li><code>##</code> = H2</li>
                        <li><code>###</code> = H3</li>
                        <li><code>####</code> = H4</li>
                        <li><code>#####</code> = H5</li>
                        <li><code>######</code> = H6</li>
                        <li><code>**bold**</code> = Bold text</li>
                        <li><code>*italic*</code> = Italic text</li>
                        <li><code>[text](url)</code> = Link</li>
                        <li><code>`code`</code> = Inline code</li>
                        <li><code>```code```</code> = Code block</li>
                        <li><code>&gt;blockquote</code> = Blockquote</li>
                        <li><code>- item</code> = Unordered list</li>
                        <li><code>1. item</code> = Ordered list</li>
                        <li><code>![alt](url)</code> = Image</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

