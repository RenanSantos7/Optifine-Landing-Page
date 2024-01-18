export default function handleDetails() {
	const elementsDetails = document.querySelectorAll('.other-downloads__item__details')

    elementsDetails.forEach(element => {
        const elementSummary = element.querySelector('.other-downloads__item__summary')
        const elementMarker = element.querySelector('.other-downloads__item__summary__marker')
        
		elementSummary.addEventListener('click', () => {
            element.classList.toggle('hidden')
            elementMarker.classList.toggle('fa-square-plus')
            elementMarker.classList.toggle('fa-square-minus')
		})
	})
}
