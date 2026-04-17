// Dummy data: Array of student performances with exam types
const performances = [
    { studentName: 'Sakshi', subject: 'Java', examType: 'Final Test', marks: 45, status: 'Pass', date: '2025-10-01' },
    { studentName: 'Samruddhi', subject: 'React', examType: 'Final Test', marks: 70, status: 'Fail',date: '2025-10-01'},
    { studentName: 'Tanvi', subject: 'IOT', examType: 'Practical Test', marks: 40, status: 'Pass', date: '2025-10-01'},
    { studentName: 'Priti', subject: 'Html', examType: 'Final Test', marks: 65, status: 'Pass', date: '2025-10-01' },
    { studentName: 'Annuj', subject: 'Java', examType: 'Midterm', marks: 45, status: 'Pass', date: '2025-10-01' },
    { studentName: 'Annu', subject: 'CNS', examType: 'Final', marks: 60, status: 'Fail', date: '2025-10-01'},
    { studentName: 'Sam', subject: 'IOT', examType: 'Midterm', marks: 30, status: 'Pass', date: '2025-10-01'},
    { studentName: 'Rutu', subject: 'Html', examType: 'Final', marks: 50, status: 'Pass', date: '2025-10-01'},
    { studentName: 'Harshada', subject: 'CSS', examType: 'Final', marks: 70, status: 'Fail' , date: '2025-10-01'},
    { studentName: 'Janvi', subject: 'React', examType: 'Midterm', marks: 55, status: 'Pass', date: '2025-10-01' },
    { studentName: 'Rutika', subject: 'Java', examType: 'Final', marks: 54, status: 'Pass', date: '2025-10-01'},
    { studentName: 'Rahul', subject: 'CSS', examType: 'Midterm', marks: 64, status: 'Pass', date: '2025-10-01'},
    { studentName: 'vijay', subject: 'DBMS', examType: 'Final', marks: 60, status: 'Fail' , date: '2025-10-01'},
    { studentName: 'Parth', subject: 'DBMS', examType: 'Midterm', marks: 23, status: 'Pass' , date: '2025-10-01'},
    { studentName: 'Ayush', subject: 'CNS', examType: 'Practical Test', marks: 49, status: 'Pass', date: '2025-10-01'},
    { studentName: 'Sakshi', subject: 'CNS', examType: 'Final Test', marks: 45, status: 'Pass', date: '2025-10-01' },
    { studentName: 'Siddhi', subject: 'React', examType: 'Final Test', marks: 70, status: 'Pass' , date: '2025-10-01'},
    { studentName: 'Prajakta', subject: 'IOT', examType: 'Practical Test', marks: 40, status: 'Fail', date: '2025-10-01' },
    { studentName: 'Pranali', subject: 'Html', examType: 'Final Test', marks: 65, status: 'Fail' , date: '2025-10-01'},
    { studentName: 'Avi', subject: 'Java', examType: 'Midterm', marks: 45, status: 'Pass', date: '2025-10-01' },
    { studentName: 'Sanket', subject: 'CNS', examType: 'Final', marks: 60, status: 'Fail', date: '2025-10-01'},
    { studentName: 'Omkar', subject: 'IOT', examType: 'Midterm', marks: 30, status: 'Pass', date: '2025-10-01'},
    { studentName: 'Aniket', subject: 'Html', examType: 'Final', marks: 50, status: 'Pass', date: '2025-10-01'},
    { studentName: 'Harsh', subject: 'CSS', examType: 'Final', marks: 70, status: 'Fail' , date: '2025-10-01'},
    { studentName: 'Aarav', subject: 'React', examType: 'Midterm', marks: 55, status: 'Pass' , date: '2025-10-01'},
    { studentName: 'Ved', subject: 'Java', examType: 'Final', marks: 54, status: 'Pass', date: '2025-10-01'},
    { studentName: 'Ram', subject: 'CSS', examType: 'Midterm', marks: 64, status: 'Pass', date: '2025-10-01'},
    { studentName: 'Raghav', subject: 'DBMS', examType: 'Final', marks: 60, status: 'Fail', date: '2025-10-01' },
    { studentName: 'Piyush', subject: 'DBMS', examType: 'Midterm', marks: 23, status: 'Pass' , date: '2025-10-01'},
    { studentName: 'Arnav', subject: 'CNS', examType: 'Practical Test', marks: 49, status: 'Pass', date: '2025-10-01'},
    { studentName: 'Prajakta', subject: 'IOT', examType: 'Practical Test', marks: 40, status: 'Fail' , date: '2025-10-01'},
    { studentName: 'Pranali', subject: 'Html', examType: 'Final Test', marks: 65, status: 'Fail', date: '2025-10-01' },
    { studentName: 'Avi', subject: 'Java', examType: 'Midterm', marks: 45, status: 'Pass' , date: '2025-10-01'},
    { studentName: 'Sanket', subject: 'CNS', examType: 'Final', marks: 60, status: 'Fail', date: '2025-10-01'},
    { studentName: 'Omkar', subject: 'IOT', examType: 'Midterm', marks: 30, status: 'Pass', date: '2025-10-01'},
    { studentName: 'Aniket', subject: 'Html', examType: 'Final', marks: 50, status: 'Pass', date: '2025-10-01'},
    { studentName: 'Harsh', subject: 'CSS', examType: 'Final', marks: 70, status: 'Fail' , date: '2025-10-01'},
    { studentName: 'Aarav', subject: 'React', examType: 'Midterm', marks: 55, status: 'Pass' , date: '2025-10-01'},
    { studentName: 'Ved', subject: 'Java', examType: 'Final', marks: 54, status: 'Pass', date: '2025-10-01'},
    { studentName: 'Ram', subject: 'CSS', examType: 'Midterm', marks: 64, status: 'Pass', date: '2025-10-01'},
    { studentName: 'Raghav', subject: 'DBMS', examType: 'Final', marks: 60, status: 'Fail' , date: '2025-10-01'}
    // Add more data as needed
];

let currentSort = { column: null, ascending: true };

// Group data by subject
function groupBySubject(data) {
    return data.reduce((acc, item) => {
        if (!acc[item.subject]) acc[item.subject] = [];
        acc[item.subject].push(item);
        return acc;
    }, {});
}

// Sort table data
function sortTable(data, column) {
    if (currentSort.column === column) {
        currentSort.ascending = !currentSort.ascending;
    } else {
        currentSort.column = column;
        currentSort.ascending = true;
    }
    return data.sort((a, b) => {
        let aVal = a[column];
        let bVal = b[column];
        if (typeof aVal === 'string') {
            aVal = aVal.toLowerCase();
            bVal = bVal.toLowerCase();
        }
        if (currentSort.ascending) {
            return aVal > bVal ? 1 : -1;
        } else {
            return aVal < bVal ? 1 : -1;
        }
    });
}

// Render the accordions with tables
function renderSubjects(groupedData) {
    const container = document.getElementById('subjects-container');
    container.innerHTML = '';
    Object.keys(groupedData).forEach(subject => {
        let students = [...groupedData[subject]]; // Copy for sorting
        const accordion = document.createElement('div');
        accordion.className = 'accordion';
        accordion.innerHTML = `
            <div class="accordion-header" onclick="toggleAccordion(this)">
                <span>${subject} (${students.length} students)</span>
                <span>+</span>
            </div>
            <div class="accordion-content">
                <table id="table-${subject}">
                    <thead>
                        <tr>
                            <th onclick="sortAndRender('${subject}', 'studentName')">Student Name <span class="sort-icon">↕</span></th>
                            <th>Subject</th>
                            <th>Exam Type</th>
                            <th onclick="sortAndRender('${subject}', 'marks')">Marks <span class="sort-icon">↕</span></th>
                            <th>Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody id="tbody-${subject}">
                        ${students.map(student => `
                            <tr>
                                <td>${student.studentName}</td>
                                <td>${student.subject}</td>
                                <td>${student.examType}</td>
                                <td>${student.marks}</td>
                                <td class="${student.status.toLowerCase()}">${student.status}</td>
                                <td>${new Date(student.date).toLocaleDateString()}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        container.appendChild(accordion);
    });
}

// Toggle accordion expand/collapse
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('span:last-child');
    if (content.style.display === 'block') {
        content.style.display = 'none';
        icon.textContent = '+';
    } else {
        content.style.display = 'block';
        icon.textContent = '-';
    }
}

// Filter subjects based on search
function filterSubjects() {
    const query = document.getElementById('search').value.toLowerCase();
    const groupedData = groupBySubject(performances);
    const filtered = Object.keys(groupedData).filter(subject =>
        subject.toLowerCase().includes(query)
    ).reduce((acc, subject) => {
        acc[subject] = groupedData[subject];
        return acc;
    }, {});
    renderSubjects(filtered);
}

// Sort and re-render a specific subject's table
function sortAndRender(subject, column) {
    const groupedData = groupBySubject(performances);
    groupedData[subject] = sortTable(groupedData[subject], column);
    renderSubjects(groupedData);
    // Re-expand the accordion after sorting
    const header = document.querySelector(`.accordion-header:contains('${subject}')`);
    if (header) toggleAccordion(header);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const groupedData = groupBySubject(performances);
    renderSubjects(groupedData);
});