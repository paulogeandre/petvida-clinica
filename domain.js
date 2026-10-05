(function(root){
  const services={Consulta:{duration:30,role:'vet'},Vacinação:{duration:20,role:'vet'},Cirurgia:{duration:90,role:'vet'},'Banho e tosa':{duration:60,role:'groom'},Banho:{duration:40,role:'groom'}};
  const professionals=[{id:'g',name:'Dr. Gabriel Santos',role:'vet'},{id:'c',name:'Dra. Camila Paes',role:'vet'},{id:'v1',name:'Veterinário plantonista 1',role:'vet'},{id:'v2',name:'Veterinário plantonista 2',role:'vet'},{id:'t1',name:'Tosador 1',role:'groom'},{id:'t2',name:'Tosador 2',role:'groom'},{id:'t3',name:'Tosador 3',role:'groom'}];
  const minutes=t=>Number(t.split(':')[0])*60+Number(t.split(':')[1]);
  function validate(a,appointments){
    const s=services[a.service],p=professionals.find(p=>p.id===a.professional);
    if(!s||!p||s.role!==p.role)return 'Selecione um profissional compatível com o serviço.';
    if(!/^\d{4}-\d{2}-\d{2}$/.test(a.date)||!/^([01]\d|2[0-3]):[0-5]\d$/.test(a.time))return 'Informe uma data e um horário válidos.';
    const start=minutes(a.time),end=start+s.duration;
    if(start<480||end>1080)return 'Na demonstração, os atendimentos devem ocorrer entre 08h e 18h.';
    if(!['cancelado','falta'].includes(a.status)&&appointments.some(b=>b.id!==a.id&&b.date===a.date&&b.professional===a.professional&&!['cancelado','falta'].includes(b.status)&&start<minutes(b.time)+services[b.service].duration&&end>minutes(b.time)))return 'Este profissional já possui um atendimento nesse intervalo. Escolha outro horário.';
    return '';
  }
  const api={services,professionals,minutes,validate};root.PetVida=api;if(typeof module!=='undefined')module.exports=api;
})(globalThis);
