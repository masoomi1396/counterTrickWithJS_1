let counter = 0;

function counterIncrease()
{
    counter++;
    document.getElementById('Counter').innerText = counter;
}
function counterDecrease()
{
    counter--;
    document.getElementById('Counter').innerText = counter;
}
function counterReset()
{
    counter = 0;
    document.getElementById('Counter').innerText = counter;
}
document.getElementById('Counter').innerText = counter;