document.addEventListener('DOMContentLoaded', () => {
    showSection('generate-titles'); 
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.tab-content');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}


function evaluateTitle() {
    const titleIdea = document.getElementById('title-idea').value.trim();
    const evaluationResultsContainer = document.getElementById('evaluation-results');
    evaluationResultsContainer.innerHTML = '';

    if (!titleIdea) {
        const noInputMessage = document.createElement('div');
        noInputMessage.className = 'evaluation-item';
        noInputMessage.innerText = "Please enter a title idea.";
        evaluationResultsContainer.appendChild(noInputMessage);
        return;
    }


    feedback.forEach(item => {
        const evaluationItem = document.createElement('div');
        evaluationItem.className = 'evaluation-item';
        evaluationItem.innerText = item;
        evaluationResultsContainer.appendChild(evaluationItem);
    });
}
