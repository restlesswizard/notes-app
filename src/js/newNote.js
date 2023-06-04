import { generateId } from './data-id-generator';
import { setToLocalStorage } from './localStorage';

let btnNewNote = document.querySelector('.add_note')
export let sectionNotes = document.querySelector('.notes')

const noteCreate = `
<div class="note-create">
  <input type="text" class="note-create__text" placeholder="Write some text here...">
  <button class="note-create__submit-btn">V</button>
</div>
`

btnNewNote.addEventListener('click', () => {
	console.log('clicked');
	btnNewNote.insertAdjacentHTML("afterend", noteCreate)
	btnNewNote.disabled = true

	submitNewNote()
})

function submitNewNote() {
	let noteCreateContainer = document.querySelector('.note-create')
	let noteSubmit = document.querySelector('.note-create__submit-btn')
	let noteText = document.querySelector('.note-create__text')

	noteSubmit.addEventListener('click', function listener() {

		if (noteText.value === '') {
			//Empty string check
			console.log('Error! Enter some text')
		} else {
			// console.log('submit')
			noteSubmit.removeEventListener('click', listener)
			noteCreateContainer.remove()
			btnNewNote.disabled = false

			//This value to localstorage
			createNewNote(noteText.value)
		}
	})
}

function createNewNote(text) {

	let id = generateId()

	sectionNotes.insertAdjacentHTML('afterbegin', `
	<div class="note" data-noteid="${id}">
		<div class="note__check">
			<input type="checkbox">
		</div>
		<p class="note__text" >${text}</p>
			<button class="note__delete-btn">X</button>
	</div>
	`)

	// localStorage.setItem(`${id}`, `${text}`)
	setToLocalStorage(`${id}`, `${text}`)

	let note = document.querySelector(`.note[data-noteid="${id}"]`)
	console.log(note)

	let noteDelete = note.querySelector('.note__delete-btn')
	console.log(noteDelete)

	noteDelete.addEventListener('click', () => {
		note.remove();
		localStorage.removeItem(id)
	},
	{ once: true }
	)
}
