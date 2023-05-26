let btnNewNote = document.querySelector('.add_note')

const noteCreate = 
'<div class="note-create">' +
  '<input type="text" class="note-create__text" placeholder="Write some text here...">' +
  '<button class="note-create__submit-btn">V</button>' +
'</div>'

btnNewNote.addEventListener('click', () => {
	console.log('clicked');
	btnNewNote.insertAdjacentHTML("afterend", noteCreate)
	btnNewNote.disabled = true

	submitNewNote()
})

function submitNewNote() {
	let note = document.querySelector('.note-create')
	note.addEventListener('click', () => {
		console.log('submit')
	})
}

console.log(noteCreate)




