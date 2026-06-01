const nameInput = document.getElementById('nameInput');
const markInput = document.getElementById('markInput');
const submitBtn = document.getElementById('submitBtn');
const resultArea = document.getElementById('resultArea');
const studentList = document.getElementById('studentList');

let students = [];

function getGrade(mark) {
    if (mark >= 80) return { status: "PASS", grade: "Distinction" };
    else if (mark >= 65) return { status: "PASS", grade: "Merit" };
    else if (mark >= 50) return { status: "PASS", grade: "Pass" };
    else return { status: "FAIL", grade: "Fail" };
}

function updateList() {
    studentList.innerHTML = '';
    
    for (let i = 0; i < students.length; i++) {
        let li = document.createElement('li');
        li.textContent = students[i].name + " - " + students[i].mark + " - " + students[i].status;
        studentList.appendChild(li);
    }
}

function handleSubmit() {
    let name = nameInput.value;
    let mark = parseInt(markInput.value);
    
    if (name === "" || name.trim() === "") {
        resultArea.innerHTML = "Error: Name required";
        return;
    }
    
    if (isNaN(mark) || mark < 0 || mark > 100) {
        resultArea.innerHTML = "Error: Mark must be 0-100";
        return;
    }
    
    let gradeInfo = getGrade(mark);
    
    if (gradeInfo.status === "PASS") {
        resultArea.innerHTML = name + " PASSED - " + gradeInfo.grade;
    } else {
        resultArea.innerHTML = name + " FAILED - " + gradeInfo.grade;
    }
    
    students.push({ name: name.trim(), mark: mark, status: gradeInfo.status });
    updateList();
    
    nameInput.value = "";
    markInput.value = "";
}

submitBtn.addEventListener('click', handleSubmit);
