/* We wrap all our code in a DOMContentLoaded event listener.
   This is the modern best practice. It ensures the HTML page is fully loaded
   before our JavaScript tries to find elements (like buttons and forms). [cite: 172]
*/
document.addEventListener('DOMContentLoaded', () => {

    // --- Part 1: Logic for index.html (User Form) ---
    
    // Find the form and output div for the User Form page
    const userForm = document.getElementById('main-form');
    const outputDiv = document.getElementById('output');

    // Check if we are on the index.html page (by seeing if the form exists)
    if (userForm) {
        
        // Use an 'event listener' (the modern way) [cite: 212, 350]
        // This listens for the 'submit' event on the form.
        userForm.addEventListener('submit', (event) => {
            
            // Prevent the form from actually submitting and reloading the page
            event.preventDefault(); 
            
            // Call the userFormFunction()
            userFormFunction();
        });
    }

    /**
     * This function is called userForm() as requested. [cite: 209]
     * It gathers user input from the form and
     * prints it to the output div. [cite: 211]
     */
    function userFormFunction() {
        // Get values from all form fields [cite: 224]
        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const province = document.getElementById('province').value;
        
        // Get the value of the CHECKED radio button [cite: 218]
        const membership = document.querySelector('input[name="membership"]:checked').value;

        // Format the output as requested [cite: 213-219]
        // Using innerHTML to easily add <br> tags
        outputDiv.innerHTML = `
            <strong>Full Name:</strong> ${firstName} ${lastName}<br> <strong>Email:</strong> ${email}<br> <strong>Address:</strong> ${address}, ${city}, ${province}<br> <strong>Membership:</strong> ${membership} `;

        // Make the output box visible after adding content
        outputDiv.style.display = 'block';
    }


    // --- Part 2: Logic for excel.html (Excel Functions) ---
    
    const excelForm = document.getElementById('excel-form');
    
    // Check if we are on the excel.html page
    if (excelForm) {
        
        // Add event listener to the 'Calculate' button [cite: 259, 262]
        excelForm.addEventListener('submit', (event) => {
            // Prevent page reload
            event.preventDefault(); 
            
            // Call the myExcelFuns() function
            myExcelFuns();
        });
    }

    /**
     * This function is named myExcelFuns() as requested. [cite: 259]
     * It mimics Excel calculations based on user input.
     */
    function myExcelFuns() {
        
        // Declare the 'result' variable [cite: 316, 318-320]
        let result;
        
        // Get the user input string and save in 'numberStr' [cite: 265-267]
        const numberStr = document.getElementById('numbers').value;

        // Check if the input is empty [cite: 268-271]
        if (!numberStr.trim()) {
            alert("Please enter your numbers first."); // [cite: 269, 273]
            return; // Stop the function
        }
        
        // This is the 'else' block from the instructions [cite: 271, 275]
        
        // Trim extra spaces from ends [cite: 276-277]
        const trimmedStr = numberStr.trim();
        
        // Convert the string to an array [cite: 278-280]
        // The delimiter is a space ' '
        const stringArr = trimmedStr.split(' '); //

        // Create a new, clean array of only numbers [cite: 281-285]
        const finalNumericArray = [];
        for (let i = 0; i < stringArr.length; i++) {
            const item = stringArr[i];
            
            // Check if the item is not an empty string (caused by multiple spaces) [cite: 283, 287-299, 311]
            if (item !== "") {
                // Convert to number and add to new array [cite: 284, 311]
                finalNumericArray.push(parseFloat(item));
            }
        }
            
        // Check which radio button is selected [cite: 313, 323, 328]
        if (document.getElementById('sum').checked) { // [cite: 330]
            // Calculate total [cite: 314, 331-333]
            result = 0;
            for (let i = 0; i < finalNumericArray.length; i++) {
                result += finalNumericArray[i];
            }
            
        } else if (document.getElementById('avg').checked) { // [cite: 334]
            // Calculate total first
            let total = 0;
            for (let i = 0; i < finalNumericArray.length; i++) {
                total += finalNumericArray[i];
            }
            // Calculate average [cite: 314, 335-336]
            result = total / finalNumericArray.length;
            
        } else if (document.getElementById('max').checked) { // [cite: 337]
            // Find max using Math.max() [cite: 314, 338, 349]
            // The '...' spread operator passes all array elements as arguments
            result = Math.max(...finalNumericArray); //
            
        } else { // This covers the 'min' case [cite: 337]
            // Find min using Math.min() [cite: 315, 339, 349]
            result = Math.min(...finalNumericArray); //
        }

        // Display the final result [cite: 321]
        // We can use .toFixed(2) to make averages look cleaner
        const resultOutput = document.getElementById('result-output');
        resultOutput.textContent = result.toFixed(2);
    }
    
    
    // --- Part 3: Logic for Theme Switcher (Runs on all pages) [cite: 343-346] ---
    
    const darkButton = document.getElementById('dark-btn');
    const lightButton = document.getElementById('light-btn');
    const body = document.body; // Get the <body> element

    // Check if the buttons exist on the page
    if (darkButton && lightButton) {
        darkButton.addEventListener('click', () => {
            body.classList.add('dark-theme');
        });
        
        lightButton.addEventListener('click', () => {
            body.classList.remove('dark-theme');
        });
    }

}); // End of DOMContentLoaded