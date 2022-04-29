
//  Compose.js script


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
// save data
const saveBtn = document.getElementById('saveDelta');
const form = document.querySelector("form")


saveBtn.addEventListener('click', async (event) => {
    try {

      event.preventDefault();  //Prevent form reload or prevent from default behaviour of page after submit

      let data = new FormData(form)  //FormData contains all the inside the given form
      // console.log(data.get('practical_id'))
      // console.log(data.get('department'))
      // console.log(data.get('year'))
      // console.log(data.get('title'))
      // console.log(data.get('discreption'))
      const department = data.get('department')
      const year = data.get('year')

      if (data.get('title') && data.get('discreption') && data.get('year') && data.get('department')){

          await axios.post('/admin/compose', {
                department: data.get('department'),
                year: data.get('year'),
                title: data.get('title'),
                discreption: data.get('discreption'),
                quillData: quill.getContents().ops
            });
          window.alert('Saved Sucessfully')
          window.location.href = `/admin/virtual-lab/${department}/${year}`;
          // console.log('posted')
          
      }else{
        window.alert("Fields can not be Empty.")
      }
      } catch (err) { 
      console.log(err);
      }
})
