import { sectionNotes } from "./newNote"

export function setToLocalStorage(key, value) {
	localStorage.setItem(key, value)
}

export function readFromLocalStorage() {
	if (localStorage.length === 0) {
		return
	}
	else {

		for (let i = 0; i < localStorage.length; i++) {
			let key = localStorage.key(i);

			console.log(key)

			sectionNotes.insertAdjacentHTML('afterbegin', `
			<div class="note" data-noteid="${key}">
				<div class="note__check">
					<input type="checkbox">
				</div>
				<p class="note__text" >${localStorage.getItem(key)}</p>
					<button class="note__delete-btn">X</button>
			</div>
			`)

			let note = document.querySelector(`.note[data-noteid="${key}"]`)

			let noteDelete = note.querySelector('.note__delete-btn')


			let checkBox = note.querySelector('input[type=checkbox]')
		
			let noteSavedText = note.querySelector('.note__text')

			checkBox.addEventListener('change', () => {
				if (checkBox.checked) {
					noteSavedText.style.textDecoration = 'line-through'
				} else {
					noteSavedText.style.textDecoration = 'none'
				}
			})

			
	
			noteDelete.addEventListener('click', () => {
				note.remove();
				localStorage.removeItem(key)
			},
			{ once: true }
			)

		}

		// let note = document.querySelector(`.note[data-noteid="${id}"]`)

		// let noteDelete = note.querySelector('.note__delete-btn')

		// noteDelete.addEventListener('click', () => {
		// 	note.remove();
		// },
		// { once: true }
		// )
	}
}
