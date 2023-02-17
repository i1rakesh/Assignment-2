document.getElementById("button").onclick = 
    function() {        
        var str = document.getElementById("string").value.toLowerCase();
        console.log("The string you entered: ", str)
        var letter = document.getElementById("letter").value.toLowerCase();
        console.log("The letter you entered: ", letter)

        //var letterCheck = str.includes(letter)
        //var letterCeck = str.indexOf(letter) !== -1
        if(str.indexOf(letter) == -1) {
            alert("Letter does not exist in the string")
        }
        else {
            var afterLetter = str.substring(str.indexOf(letter)+1);
            console.log("Substring:",afterLetter)
        }
    }