const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

for (let ndx=0; ndx < 50; ndx++) {
   const flake = document.createElement('span');
   flake.innerText = '*';
   flake.setAttribute('class', 'snow-flake');
   const style = `left:${rnd(-10,window.innerWidth+10)}px; animation-duration: ${rnd(10,25)}s, ${rnd(5,10)}s; animation-delay: ${rnd(0,15)}s; font-size: ${rnd(5,30)}px`;
   flake.setAttribute('style', style);
   //alert(flake);
   document.body.appendChild(flake);
}