
function ex1 () {
    let num = prompt("Enter a number: ");
    let total = 0;
    while( num != -1 ) {
        num = parseInt(prompt("Enter a number: "));
        total += num;
        alert(total);
    }
}

function ex2 () {
    let i = 1;

    while (i < 100) {
        //phân thân vòng lặp
        document.write("<hr width = " + i + "%>");
        i++;
    }
}
