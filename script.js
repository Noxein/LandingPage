const wallpaper1 = "url(https://images2.alphacoders.com/631/631068.jpg)"
const wallpaper2 = "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/003e1649-1298-4774-a5fe-0cbc297194f1/den7f7f-65b9a7eb-addc-4c7d-89d3-75c17edfbc9b.jpg/v1/fill/w_1920,h_960,q_75,strp/mountain_speedpaint_by_somatonic_den7f7f-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvMDAzZTE2NDktMTI5OC00Nzc0LWE1ZmUtMGNiYzI5NzE5NGYxXC9kZW43ZjdmLTY1YjlhN2ViLWFkZGMtNGM3ZC04OWQzLTc1YzE3ZWRmYmM5Yi5qcGciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.8cDorxzVChZ2OjF1PyqWrE5AdF2vGjzfedf-ZktwPr0)"
const wallpaper3 = "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/003e1649-1298-4774-a5fe-0cbc297194f1/deek61g-18ced6e9-2d9b-467a-876d-e46fadeb09a1.jpg/v1/fill/w_1600,h_900,q_75,strp/homeland_by_somatonic_deek61g-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMDAzZTE2NDktMTI5OC00Nzc0LWE1ZmUtMGNiYzI5NzE5NGYxXC9kZWVrNjFnLTE4Y2VkNmU5LTJkOWItNDY3YS04NzZkLWU0NmZhZGViMDlhMS5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.KfGijw_Mo3bH-eHeJjTZq7mFt-MTerVliw0RO_H_7bA)"

const wallpArr=[wallpaper1,wallpaper2,wallpaper3];
const bod = document.querySelector('body');

function randMath(){
    randomNum = (Math.random()*3)+1;
    if(randomNum<2){
        return wallpArr[0];
    }
    else if(randomNum>2&&randomNum<3){
        return wallpArr[1];
    }else{
        return wallpArr[2];
    }
}

function changeWallpaper(wallpaper){
    window.addEventListener('keypress',event =>{
        if(event.key=="v"){
                bod.style.backgroundImage=randMath();
            }
        }
    )}
changeWallpaper();
