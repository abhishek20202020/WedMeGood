let menu=document.querySelector('#menu-bar');
    let head=document.querySelector('.head .navbar');
    menu.oneclick=()=>
{
    head.classlist.toggle('active');
};
window.onscroll = () =>
{
    head.classList.remove('active');
    if(window.scrollY>60){
        document.querySelector('#menu-bar').classList.add('active');
    }
    else{
        document.querySelector('#menu-bar').classList.remove('active');
    }
}