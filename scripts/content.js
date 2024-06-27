

var getAllPageText = () => {
    const textToDisplay = '**';
    var loopHtmlTagsToReplaceText = (htmlTagsArray) => {
        htmlTagsArray.forEach((htmlTags) => {
            if (htmlTags && htmlTags.length > 0) {
                Object.keys(htmlTags).slice().reverse().forEach((tag) => {
                    let childrenStatic = [];
                    for (let i = 0; i < htmlTags[tag].childNodes.length; i++) {
                        if (htmlTags[tag].childNodes[i].nodeType == Node.TEXT_NODE)
                            continue;
                        childrenStatic.push(htmlTags[tag].childNodes[i]);
                    }
                    if (htmlTags[tag]) htmlTags[tag].textContent = htmlTags[tag].textContent.replace(new RegExp(regex), textToDisplay);
                    for (let i = 0; i < childrenStatic.length; i++) {
                        htmlTags[tag].appendChild(childrenStatic[i]);
                    }
                })
            }
        })
    };
    const h1tags = document.getElementsByTagName("h1");
    const h2tags = document.getElementsByTagName("h2");
    const h3tags = document.getElementsByTagName("h3");
    const spanTags = document.getElementsByTagName("span");
    const pTags = document.getElementsByTagName("p");
    const bTags = document.getElementsByTagName("b");
    const inputTags = document.getElementsByTagName("input");
    const iTags = document.getElementsByTagName("i");

    const regex = /\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})/gi;

    loopHtmlTagsToReplaceText([h1tags, h2tags, h3tags, spanTags, pTags, bTags, inputTags, iTags]);
}


document.addEventListener('DOMContentLoaded', async (event) => {

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getAllPageText,
    });
});