# Cat Images

## https://shelltear.lol/cats

## Implementation

- **HTML:**
  - File: `index.html`, Line: 1
    - Basic HTML structure is present.
    ```html
    <!DOCTYPE html>
    ```
  - File: `index.html`, Line: 5-8
    - HTML structure with clear content differentiation (headings, paragraphs).
    ```html
    <header>
        <h1>Cat Images</h1>
        <p>Select a tag and press 'Get cat'</p>
    </header>
    ```
  - File: `index.html`, Line: 12-15
    - Use of forms, links, and media.
    ```html
    <select name="tags" id="tagsList"></select>
    <button id="getCat">Get Cat</button>
    ```

- **CSS:**
  - File: `stylesheet.css`, Line: 1-5
    - Basic CSS styling (colors, fonts).
    ```css
    body {
        background-color: #1a1a1a;
        color: #e0e0e0;
        font-family: 'Arial', sans-serif;
    }
    ```
  - File: `stylesheet.css`, Line: 20-25
    - Use of classes and IDs to style specific elements.
    ```css
    button {
        border: 2px solid #66d9ff;
        background-color: #66d9ff;
    }
    ```
  - File: `stylesheet.css`, Line: 30-35
     Implementation of responsive design elements.
    ```css
    @media (max-width: 768px) {
        h1 {
            font-size: 2em;
        }
    }
    ```

- **JavaScript:**
  - File: `code.js`, Line: 40
    - **Grading Criteria:** Simple interactions (like alerts on button click).
    ```javascript
    return alert('Already getting a cat');
    ```
  - File: `code.js`, Line: 50-53
    - **Grading Criteria:** Multiple event listeners and basic DOM manipulations.
    ```javascript
    document.getElementById('getCat').addEventListener('click', () => cats.getCat());
    ```
  - File: `code.js`, Line: 20-25
    - Use of arrays, objects, and functions.
    ```javascript
    const tags = await this.getCatTags();
    ```
  - File: `code.js`, Line: 25-30
    - Advanced logic, looping through data, and dynamic DOM updates.
    ```javascript
    tags.forEach(tag => {
        // logic
    });
    ```
  - File: `code.js`, Line: 1-5
     Consistent use of Object-Oriented JavaScript principles.
    ```javascript
    class Cat {
        constructor() {
            // constructor
        }
    }
    ```

- **Asynchronous Operations:**
  - File: `code.js`, Line: 10-15
    - Successful implementation of an AJAX call or Fetch.
    ```javascript
    const resp = await this.makeRequest('/api/tags');
    ```
  - File: `code.js`, Line: 60-70
    - Data from the asynchronous call is displayed on the webpage.
    ```javascript
    const image = document.createElement('img');
    image.src = imageSrc;
    ```
  - File: `code.js`, Line: 75-80
     Error handling is implemented (for failed API calls, etc.).
    ```javascript
    try {
        // try to remove cat
    } catch {
        console.log('No cat to remove');
    }
    ```
  - File: `code.js`, Line: 65-70
    - Effective use of asynchronous data to enhance user experience.
    ```javascript
    const selected = this.tagsList.value;
    ```

