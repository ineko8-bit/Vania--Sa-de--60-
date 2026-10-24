"use strict";
const KEY="saude60-hidratacao-v1";
const $=s=>document.querySelector(s);
const dia=()=>{const d=new Date();return [d.getFullYear(),String(d.getMonth()+1).padStart(2,"0"),String(d.getDate()).padStart(2,"0")].join("-")};
function ler(){try{const v=JSON.parse(localStorage.getItem(KEY)||"{}");return {peso:Number(v.peso)||0,registros:Array.isArray(v.registros)?v.registros:[]}}catch{return {peso:0,registros:[]}}}
function salvar(v){localStorage.setItem(KEY,JSON.stringify(v))}
function atualizar(){const v=ler(),hoje=v.registros.filter(r=>r.dia===dia()),total=hoje.reduce((s,r)=>s+Number(r.ml||0),0),meta=Math.round(v.peso*30);
$("#peso").value=v.peso||"";
$("#meta").textContent=meta?("Referência inicial: "+meta.toLocaleString("pt-BR")+" mL/dia"):"Informe o peso para calcular uma referência inicial.";
$("#total").textContent=total.toLocaleString("pt-BR")+" mL consumidos hoje";
const pct=meta?Math.min(100,Math.round(total/meta*100)):0;$("#progresso").value=pct;
$("#alerta").textContent=!meta?"Calcule a referência para acompanhar seu progresso.":total>=meta?"Você atingiu a referência calculada. Não é necessário beber além da orientação individual.":"Você alcançou "+pct+"% da referência calculada. Restam "+Math.max(0,meta-total).toLocaleString("pt-BR")+" mL para essa referência.";
$("#lista").replaceChildren();if(!hoje.length){const li=document.createElement("li");li.textContent="Nenhum consumo registrado hoje.";$("#lista").append(li)}
for(const r of hoje){const li=document.createElement("li");li.textContent=Number(r.ml).toLocaleString("pt-BR")+" mL — "+r.hora;$("#lista").append(li)}
}
$("#form-meta").addEventListener("submit",e=>{e.preventDefault();const peso=Number($("#peso").value);if(!Number.isFinite(peso)||peso<20||peso>300){$("#status").textContent="Informe um peso entre 20 e 300 kg.";return}try{const v=ler();v.peso=peso;salvar(v);$("#status").textContent="Referência calculada.";atualizar()}catch{$("#status").textContent="Não foi possível salvar neste navegador."}});
$("#form-agua").addEventListener("submit",e=>{e.preventDefault();const ml=Number($("#volume").value);if(!Number.isInteger(ml)||ml<1||ml>3000){$("#status").textContent="Informe de 1 a 3000 mL por registro.";return}try{const v=ler();v.registros.push({dia:dia(),ml,hora:new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})});salvar(v);$("#form-agua").reset();$("#status").textContent="Água registrada com sucesso.";atualizar()}catch{$("#status").textContent="Não foi possível salvar neste navegador."}});
$("#limpar").addEventListener("click",()=>{if(!confirm("Excluir todos os registros de hoje?"))return;try{const v=ler();v.registros=v.registros.filter(r=>r.dia!==dia());salvar(v);$("#status").textContent="Registros de hoje excluídos.";atualizar()}catch{$("#status").textContent="Não foi possível excluir os registros."}});
atualizar();