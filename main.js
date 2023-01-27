// get elements from the DOM
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const counters = document.querySelectorAll(".counter");

// Toggle open/close menu
menuBtn.addEventListener("click", ()=>{
    menu.classList.toggle("menu-open");
});

// Select all counters
counters.forEach(counter =>{
    // Set counter values to Zero
    counter.innerText = 0;
    // Set count variable to track the count
    let count = 0;

    // Update count function
    function updateCount(){
        // Get counter target number to count to
        const target = parseInt(counter.dataset.count);
        // As Long as the count is below the target number
        if(count < target){
            // Increment the count by 10
            count+=10;
            // Set the counter test to the count
            counter.innerText=count+"+";
            // Repeat this every 10 milliseconds
            setTimeout(updateCount, 10); //Count Speed
        }
        // And when the target is reached
        else{
            // Set the counter text to the target number
            counter.innerText=target+"+";
        }
    }
    // Run the function initially
    updateCount();
}); 


// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="S".charCodeAt(0)){
        return false;
    }
};