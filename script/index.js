function updataImage(){
    console.log(this.files);

    parent.querySelectorAll('p').forEach((n) => n.remove())
    parent.querySelectorAll('div').forEach((n) => n.remove())

    preview.src = window.URL.createObjectURL(this.files[0]);
    // preview.setAttribute('height', '99%')
    //preview.src='photo.jpg'


    //const div = document.createElement('div');
    //div.setAttribute('class','classifyOnClick');
    //div.innerHTML = `<img id="img" src="${preview.src}"/>`;
    //document.querySelector("#demos").appendChild(div);

}   


function highlightDropZone(event){
    event.preventDefault()
    this.classList.add('drop')
    dropFileTextH2.innerHTML = "Отпустите фотографию"
    dropFileTextSpan.innerHTML = null
}

function unHighlightDropZone(event){
    event.preventDefault()
    this.classList.remove('drop')
    dropFileTextH2.innerHTML = "Выберите фотографию<br>или перетащите в область"
    dropFileTextSpan.innerHTML = "файл формата .jpg"
}

function CreateImg(src){
      
    const div = document.createElement('div');
    div.setAttribute('class','classifyOnClick');

    div.innerHTML = `<img id="img" src="${src}"/>`;

    document.querySelector("#demos").appendChild(div);
}


const fotoInput = document.querySelector('#foto')
const dropFile = document.querySelector('#dropFile')
const preview = document.querySelector('#preview-ai')
const dropFileTextH2 = document.querySelector('#img-preview-h2')
const dropFileTextSpan = document.querySelector('#img-preview-span')

const btn = document.querySelector('.content--btn')
const parent = document.querySelector('.classifyOnClick')


btn.addEventListener('click', ()=>{

    parent.querySelectorAll('p').forEach((n) => n.remove())
    parent.querySelectorAll('div').forEach((n) => n.remove())

})

dropFile.addEventListener('dragover', highlightDropZone)
dropFile.addEventListener('dragenter', unHighlightDropZone)
dropFile.addEventListener('dragleave', unHighlightDropZone)
dropFile.addEventListener('drop', (event)=>{
    
    const dt = event.dataTransfer
    
    console.log(dt.files)
    unHighlightDropZone.call(dropFile, event)

    updataImage.call(dt)
})

fotoInput.addEventListener('change', updataImage)
