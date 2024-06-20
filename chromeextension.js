// function save()
// {
//     console.log("Button Clicked");
// }
// we can use the event listner lets use event listner


let myleads=[];
const input=document.getElementById("i1");

let savebtn= document.getElementById("b1");

savebtn.addEventListener("click",function()
{
    myleads.push(input.value);
    renderLeads();
    input.value=""
   
})
//rendering the leads in the unordered list using textContent
let ulel=document.getElementById("u1");
function renderLeads()
{    
    let listitems="";
    for(let i=0;i<myleads.length;i++)
        {
            listitems+="<li><a target='_blank' href='" + myleads[i] + "'>" + myleads[i]+"</a></li> "
        }
    ulel.innerHTML=listitems;
}