const btnSubmit = document.querySelector('.btn-submit');
const ratingComponent = document.querySelector('.rating-component');
const summaryComponent = document.querySelector('.summary-component');
const userChoice = document.querySelector('.user-choice');

let rateNumber = 0;

function rating(e) {
	rateNumber = e;
}

btnSubmit.addEventListener('click', () => {
	if (rateNumber != 0) {
		ratingComponent.classList.add('hide');
		summaryComponent.classList.remove('hide');
		userChoice.innerText = rateNumber;
	}
});
