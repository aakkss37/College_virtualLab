var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        ['link', 'image', 'video'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
];
var quill = new Quill('#editor', {
        modules: {
                toolbar: toolbarOptions
        },
        theme: 'snow'
});




// UPDATE DATA
const saveBtn = document.getElementById('saveDelta');
const form = document.querySelector("form")



saveBtn.addEventListener('click', async (event) => {
        try {
                console.log('clicked')
                event.preventDefault();  //Prevent form reload or prevent from default behaviour of page after submit
                let data = new FormData(form)  //FormData contains all the inside the given form
                console.log(data.get('practical_Id'))
                console.log(data.get('department'))
                console.log(data.get('year'))
                console.log(data.get('title'))
                console.log(data.get('discreption'))


                if (data.get('title') && data.get('discreption') && data.get('year') && data.get('department')) {

                        const update = await axios.put('/admin/update-practical', {
                                id: data.get('practical_Id'),
                                department: data.get('department'),
                                year: data.get('year'),
                                title: data.get('title'),
                                discreption: data.get('discreption'),
                                quillData: quill.getContents().ops
                        });

                        window.alert('Document Updated Sucessfully')
                        // console.log("updated",xyz)
                        window.location.href = `/admin/virtual-lab/${data.get('department')}/${data.get('year')}`
                } else {
                        window.alert("Fields can not be Empty.")
                }
        } catch (err) {
                console.log(err);
        }
})
