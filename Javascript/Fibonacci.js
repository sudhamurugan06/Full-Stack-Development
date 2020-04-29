var n1=0,n2=1,nextterm=0;



for (i = 2; i <= 10; i++) {
  
  nextterm = n1 + n2;
  n1=n2;
  n2=nextterm;
  console.log(nextterm);
}
