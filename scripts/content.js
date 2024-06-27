

var getAllPageText = () => {
    const textToDisplay = '****';
    var loopHtmlTagsToReplaceText = (htmlTags) => {
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
    if (h1tags && h1tags.length > 0) {
        Object.keys(h1tags).slice().reverse().forEach((h1) => {
            if (h1tags[h1]) h1tags[h1].textContent = h1tags[h1].textContent.replace(new RegExp(regex), textToDisplay);
        })
    }
    if (h2tags && h2tags.length > 0) {
        Object.keys(h2tags).slice().reverse().forEach((h2) => {
            if (h2tags[h2]) h2tags[h2].textContent = h2tags[h2].textContent.replace(new RegExp(regex), textToDisplay);
        })
    }
    if (h3tags && h3tags.length > 0) {
        Object.keys(h3tags).slice().reverse().forEach((h3) => {
            if (spanTags[h3]) spanTags[h3].textContent = spanTags[h3].textContent.replace(new RegExp(regex), textToDisplay);
        })
    }
    // if (spanTags && spanTags.length > 0) {
    //     Object.keys(spanTags).slice().reverse().forEach((span) => {
    //         let childrenStatic = [];
    //         for (let i = 0; i < spanTags[span].childNodes.length; i++) {
    //             if (spanTags[span].childNodes[i].nodeType == Node.TEXT_NODE)
    //                 continue;
    //             childrenStatic.push(spanTags[span].childNodes[i]);
    //         }
    //         if (spanTags[span]) spanTags[span].textContent = spanTags[span].textContent.replace(new RegExp(regex), textToDisplay);
    //         for (let i = 0; i < childrenStatic.length; i++) {
    //             spanTags[span].appendChild(childrenStatic[i]);
    //         }
    //     })
    // }
    loopHtmlTagsToReplaceText(spanTags);
    if (pTags && pTags.length > 0) {
        Object.keys(pTags).slice().reverse().forEach((p) => {
            if (pTags[p]) pTags[p].textContent = pTags[p].textContent.replace(new RegExp(regex), textToDisplay);
        })
    }
    if (bTags && bTags.length > 0) {
        Object.keys(bTags).slice().reverse().forEach((b) => {
            if (bTags[b]) bTags[b].textContent = bTags[b].textContent.replace(new RegExp(regex), textToDisplay);
        })
    }
    if (inputTags && inputTags.length > 0) {
        Object.keys(inputTags).slice().reverse().forEach((input) => {
            if (inputTags[input]) inputTags[input].textContent = inputTags[input].textContent.replace(new RegExp(regex), textToDisplay);
        })
    }
    if (iTags && iTags.length > 0) {
        Object.keys(iTags).slice().reverse().forEach((i) => {
            if (iTags[i]) iTags[i].textContent = iTags[i].textContent.replace(new RegExp(regex), textToDisplay);
        })
    }
    // for (const textNode of textNodes) {
    //     if (textNode.nodeType === Node.TEXT_NODE) {
    //         const replacedText = textNode.textContent.replace(
    //             new RegExp(regex),
    //             "***"
    //         );
    //         textNode.textContent = replacedText;
    //     }
    // }
    window.setTimeout(function () {
        getAllPageText();
    }, 1000)
}


document.addEventListener('DOMContentLoaded', async (event) => {

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getAllPageText,
        // args: [insertDescriptionInput.value]
    });
})


// button.addEventListener("click", async (event) => {
//     console.log('teste')
//     const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//     console.log(insertDescriptionInput)
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: getAllPageText,
//         // args: [insertDescriptionInput.value]
//     });
// });
