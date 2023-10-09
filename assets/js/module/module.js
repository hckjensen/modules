export function ErrorDisplay(displayType, message){
    // alert(message)
    
    switch(displayType){
        case 'warning':
            console.warn(message);
            break;
        case 'alert':
            alert(message);
            break;
        case 'error':
            console.error(message)
    }
}



ErrorDisplay('error', 'et eller andet')


let myDomElement = document.getElementById('feedback');

export function userFeedback(myType, myMessage, myId){
    switch(myType){
        case 'succes':
            myDomElement.innerHTML = `${myType}: ${myMessage}`;
            break;

        case 'error':
            myDomElement.innerHTML = `${myType}: ${myMessage}`;
            break;

        case 'warning':
            myDomElement.innerHTML = `${myType}: ${myMessage}`;
            break;


    }
}

userFeedback('succes', 'skide godt', 'feedback')

