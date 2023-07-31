let Projects = [];

function Elements(datasetID,textContent,headerContent){
    this.datasetID = datasetID
    this.addElement = function(){
        let parentElement = document.querySelector('#parentproject');
    
        let newElement = parentElement.cloneNode(true);
        newElement.classList.toggle('parentproject')
        newElement.querySelector('.edit').addEventListener('click',()=>{
            console.log('toggled')

            newElement.querySelector('.head-project-text').classList.toggle('toggled');
            newElement.querySelector('.project-text').classList.toggle('toggled');
            newElement.querySelectorAll('#tog').forEach(tog=> {tog.classList.toggle('toggled')});
            saveBtn = newElement.querySelector('.save');
            saveBtn.classList.toggle("toggled");
            deleteBtn = newElement.querySelector('.delete');
            deleteBtn.classList.toggle("toggled")
        })

        newElement.querySelector('.save').addEventListener('click',()=>{
            let header = newElement.querySelector('.head-project-area').value;
            let text = newElement.querySelector('.text-project-area').value;
                
            newElement.querySelector('.head-project-text').textContent = header;
            newElement.querySelector('.project-text ').textContent = text;

            saveBtn.classList.toggle("toggled")
            deleteBtn.classList.toggle("toggled")
            newElement.querySelector('.head-project-text').classList.toggle('toggled');
            newElement.querySelector('.project-text').classList.toggle('toggled');
            newElement.querySelectorAll('#tog').forEach(tog=> {tog.classList.toggle('toggled')});

            this.textContent = newElement.querySelector('.head-project-text').textContent;
            this.headerContent = newElement.querySelector('.project-text ').textContent
        });
        
        newElement.querySelector('.delete').addEventListener('click',()=>{
            cnf = confirm("Are you sure you want to delete this Project "+newElement.querySelector('.project-text').textContent+"?")
            if(cnf==true){
                newElement.remove();
            }
        })
        
        document.querySelector('.projects').insertBefore(newElement,document.querySelector('.add-project'))
    }
    this.textContent = textContent
    this.headerContent = headerContent
}

function addtoProjectArr(dataid){
    element = new Elements(dataid)
    Projects.push(element)

}
addtoProjectArr(1)
addtoProjectArr(2)


document.querySelector('.add-project').addEventListener('click',()=>{
    x = Projects.length
    addtoProjectArr(x)
    console.log(x)
    Projects[x].addElement()

})