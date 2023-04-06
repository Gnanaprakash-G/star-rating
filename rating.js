document.querySelector('.s1').addEventListener('click',()=>
{
  update('1')
  
})
document.querySelector('.s2').addEventListener('click',()=>
{
  update('2')
})
document.querySelector('.s3').addEventListener('click',()=>
{
  update('3')
})
document.querySelector('.s4').addEventListener('click',()=>
{
  update('4')
})
document.querySelector('.s5').addEventListener('click',()=>
{
  update('5')
})

function update(string)
{
  let emoji=''
  del()
  change(string)
  if(string==='1')
  {
    emoji='angry'
  }
  if(string==='2')
  {
    emoji='frown'
  }
  if(string==='3')
  {
    emoji='meh'
  }
  if(string==='4')
  {
    emoji='laugh'
  }
  if(string==='5')
  {
    emoji='smile'
  }
  
  document.querySelector('.face-emojis').src=`face-${emoji}.svg`
}
const stars=document.querySelectorAll('.star-img');
function del()
{
  stars.forEach((star)=>
  {
    star.style.color='black'
  })
}
function change(string)
{
  let n=Number(string)-1
  for(let i=0;i<=n;i++)
  {
    stars[i].style.color='gold'
  }
}