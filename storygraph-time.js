const WPM = 350;
let currentUrl = window.location.href;

function addEstimateHoursBooks(){
    let contentToRead = document.getElementsByClassName("col-span-5");
    for(let i = 0; i < contentToRead.length; i++){
        if(contentToRead[i].childNodes[3]){
            text = contentToRead[i].childNodes[3].textContent;
            if (!text.includes("h")){
                matches = text.match(/\d+/);
                if(matches){
                    const pageCount = parseInt(matches[0]);
                    let EstimateHours = (((pageCount*300)/WPM)/60).toFixed(1);
                    contentToRead[i].childNodes[3].textContent += EstimateHours + "h";
                }
            }
            

        }
    }
}

function addEstimateHoursBook(){
    let contentToRead = document.getElementsByClassName("col-span-2");
    if(contentToRead[0].childNodes[3]){
        text = contentToRead[0].childNodes[3].textContent;
        if (!text.includes("h")){
            matches = text.match(/\d+/);
            if(matches){
                const pageCount = parseInt(matches[0]);
                let EstimateHours = (((pageCount*300)/WPM)/60).toFixed(1);
                contentToRead[0].childNodes[3].textContent += EstimateHours + "h";
            }
        }
        
    }

}

function timeSpentReading(){
    let contentToRead = document.getElementsByClassName("my-2");
    let text = contentToRead[0].childNodes[3].textContent
    if (!text.includes("hours")){
        let matches = text.match(/\d+/g);
        let pagesRead = 0;
        if(matches){
            for(let i = 1; i < matches.length; i++){
                pagesRead += matches[i];
            }

            pagesRead = parseInt(pagesRead)
            hoursRead = ((pagesRead*300)/WPM)/60;
            daysRead = (hoursRead/24).toFixed(1)
            contentToRead[0].childNodes[3].textContent += ", " + ((hoursRead).toFixed(0)) + " hours" + " / " + daysRead + " days";
        }
    }
}

function timeToBeRead(){
    let documentFormatDiv = document.getElementsByClassName("dark:block")
    let contentToRead = document.getElementsByClassName("my-2");
    let contentText = contentToRead[0].childNodes[3].textContent;
    let text = documentFormatDiv[7].childNodes[3].textContent
    console.log(text)
    if (!contentText.includes("hours")){
        let matches = text.match(/\d+/g)
        let pagesRead = 0;
        if(matches){
        for(let i = 0; i < matches.length; i++){
            pagesRead += matches[i];
        }
        pagesRead = parseInt(pagesRead);
        console.log(pagesRead)
        hoursRead = ((pagesRead*300)/WPM)/60;
        daysRead = (hoursRead/24).toFixed(1)
        contentToRead[0].childNodes[3].textContent += ", " + ((hoursRead).toFixed(0)) + " hours" + " / " + daysRead + " days";
        }
    }
}

console.log(currentUrl)
if (currentUrl == "https://app.thestorygraph.com/recommendations"){
    setTimeout(addEstimateHoursBooks, 3000);
}
else if (currentUrl.startsWith("https://app.thestorygraph.com/books/")){
    setTimeout(addEstimateHoursBook, 300);

}else if (currentUrl.includes("stats_type=To-Read" )){
    setTimeout(timeToBeRead, 500);
}
else if (currentUrl.startsWith("https://app.thestorygraph.com/stats/")){
    setTimeout(timeSpentReading, 500);
}
else{
    setTimeout(addEstimateHoursBooks, 800);
}
setInterval(function() {
    
    if (window.location.href !== currentUrl) {
        currentUrl = window.location.href
        console.log(currentUrl)
        if (currentUrl == "https://app.thestorygraph.com/recommendations"){
            setTimeout(addEstimateHoursBooks, 3000);
        }
        else if (currentUrl.startsWith("https://app.thestorygraph.com/books/")){
            setTimeout(addEstimateHoursBook, 300);
        }
        else if (currentUrl.includes("stats_type=To-Read" )){
            setTimeout(timeToBeRead, 500);
        }
        else if (currentUrl.startsWith("https://app.thestorygraph.com/stats/")){
            setTimeout(timeSpentReading, 500);
        }
        else if (currentUrl.startsWith("https://app.thestorygraph.com/stats/")){
            setTimeout(timeSpentReading, 300);
        }
        else{
            setTimeout(addEstimateHoursBooks, 800);
        }
    }
}, 1000); 


