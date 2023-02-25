
console.log(document.getElementById('btnAddRow'));

var arr =[];

var element = document.querySelector('.btn-add-row');

console.log(element);
                                      
element.addEventListener("click", function(e) {
    alert('something');
}, false);

function addRow(){
   // var table = document.getElementsByClassName('table-1');
    var table=document.getElementsByClassName('table-1')[0];
    console.log(table);
    const row = document.createElement("tr");
    var id = document.createElement("td");
    var idInput = document.createElement('input');
    id.appendChild(idInput);

    var name = document.createElement("td");
    var nameInput = document.createElement('input');
    name.appendChild(nameInput);

    var roll = document.createElement("td");
    var rollInput = document.createElement('input');
    roll.appendChild(rollInput);

    var subject = document.createElement("td");
    var subjectInput = document.createElement('input');
    subject.appendChild(subjectInput);

    var marks = document.createElement("td");
    var marksInput = document.createElement('input');
    marks.appendChild(marksInput);

    var markedBy = document.createElement("td");
    var markedByInput = document.createElement('input');
    markedBy.appendChild(markedByInput);

    var save = document.createElement("td");
    var saveBtn = document.createElement('button');
    saveBtn.innerHTML="Save"
    save.appendChild(saveBtn);
    saveBtn.onclick= function(e){
        e.preventDefault();
        var id1 = idInput.value;
        var name1  = nameInput.value;
        var roll1 = rollInput.value;
        var subject1 = subjectInput.value;
        var marks1 = marksInput.value;
        var markedBy1 = markedByInput.value;

        const row2 = [];
        var id2 = document.createElement("td");
        var idInput2 = document.createElement('span');
        idInput2.innerHTML=id1;
        id2.appendChild(idInput2);
    
        var name2 = document.createElement("td");
        var nameInput2 = document.createElement('span');
        nameInput2.innerHTML=name1;
        name.appendChild(nameInput2);
    
        var roll2 = document.createElement("td");
        var rollInput2 = document.createElement('span');
        rollInput2.innerHTML=roll1;
        roll.appendChild(rollInput2);
    
        var subject2 = document.createElement("td");
        var subjectInput2 = document.createElement('span');
        subjectInput2.innerHTML=subject1;
        subject.appendChild(subjectInput2);
    
        var marks2 = document.createElement("td");
        var marksInput2 = document.createElement('span');
        markedByInput2.innerHTML=marks1;
        marks.appendChild(marksInput2);
    
        var markedBy2 = document.createElement("td");
        var markedByInput2 = document.createElement('span');
        markedByInput2.innerHTML=markedBy1;
        markedBy.appendChild(markedByInput2);

        row2.push(id2)
        row2.appendChild(name2)
        row2.appendChild(roll2)
        row2.appendChild(subject2)
        row2.appendChild(marks2)
        row2.appendChild(markedBy2);
        table.insert(row2);     
    }

    row.appendChild(id)
    row.appendChild(name)
    row.appendChild(roll)
    row.appendChild(subject)
    row.appendChild(marks)
    row.appendChild(markedBy)
    row.appendChild(save)
    table.appendChild(row)

}
