var soma = 1;
var index = 0;
var sla;
i = 0;
while (i <=30) {
  sla = soma + index;
  soma = index;
  index = sla;
  console.log (sla)
  i++
}
