var students = [['BARATH', 80], ['VIGNESH', 77], ['sathish', 88], 
                    ['ravanth', 95], ['ragul', 68]];

    var marks = 0;

    for (var i=0; i < students.length; i++) {
        marks += students[i][1];
    }

    var avg = (marks / students.length);

    document.write("Average grade: " + avg);
    document.write("<br>");

    if (avg < 60)
    {
        document.write("Grade : F");     
    } 
    else if (avg < 70) 
    {
        document.write("Grade : D"); 
    } 
    else if (avg < 80) 
    {
        document.write("Grade : C"); 
    } 
    else if (avg < 90) 
    {
        document.write("Grade : B"); 
    } 
    else if (avg < 100) 
    {
        document.write("Grade : A"); 
    }