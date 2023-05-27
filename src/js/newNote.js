let btnNewNote = document.querySelector('.add_note')
let sectionNotes = document.querySelector('.notes')

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
	sectionNotes.insertAdjacentHTML('afterbegin', `
	<div class="note">
		<div class="note__check">
			<input type="checkbox" name="note-checkbox1" id="note-checkbox1">
		</div>
		<p class="note__text" >${text}</p>
			<button class="note__delete-btn">X</button>
	</div>
	`)
}



