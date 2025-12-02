document.addEventListener("DOMContentLoaded", ()=>{
    const role = localStorage.getItem("edu_role");
    if(role!=="alumne"){ window.location.href="../index.html"; return; }

    document.getElementById("logout").onclick = ()=>{ localStorage.clear(); window.location.href="../index.html"; };

    const panel = document.getElementById("panelContent");

    const faltas=[
        {assignatura:"TU (Tutoria)", present:3, absent:0, just:0, retard:0, percent:"0%"},
        {assignatura:"OPT (Cloud)", present:17, absent:0, just:0, retard:0, percent:"0%"},
        {assignatura:"(1709) IPO1", present:13, absent:9, just:0, retard:0, percent:"41%"},
        {assignatura:"PRO (Projectes)", present:42, absent:11, just:0, retard:0, percent:"21%"},
        {assignatura:"(1710) IPO2", present:13, absent:3, just:0, retard:0, percent:"19%"},
        {assignatura:"(0374) ASO", present:24, absent:0, just:0, retard:0, percent:"0%"},
        {assignatura:"(0375) SXI", present:11, absent:3, just:0, retard:0, percent:"21%"},
        {assignatura:"(0376) IAW", present:12, absent:2, just:0, retard:0, percent:"14%"},
        {assignatura:"(0378) SAD", present:12, absent:0, just:0, retard:0, percent:"0%"}
    ];

    document.getElementById("opcioSelect").onchange = ()=>{
        const val = document.getElementById("opcioSelect").value;
        panel.innerHTML = "";

        if(val==="faltas"){
            let html="<table><tr><th>Assignatura</th><th>Present</th><th>Absent</th><th>Justificada</th><th>Retard</th><th>% absència</th></tr>";
            faltas.forEach(f=>{
                html+=`<tr>
                    <td>${f.assignatura}</td>
                    <td>${f.present}</td>
                    <td>${f.absent}</td>
                    <td>${f.just}</td>
                    <td>${f.retard}</td>
                    <td>${f.percent}</td>
                </tr>`;
            });
            html+="</table>";
            panel.innerHTML=html;
        }

        else if(val==="justificar"){
            let html="<select id='assigJust'><option value=''>Tria assignatura</option>";
            faltas.forEach(f=>{ html+=`<option value='${f.assignatura}'>${f.assignatura}</option>`; });
            html+="</select><input type='text' id='motiu' placeholder='Motiu'/><button id='sendJust'>Enviar</button>";
            panel.innerHTML=html;
            document.getElementById("sendJust").onclick=()=>{
                const assig=document.getElementById("assigJust").value;
                const motiu=document.getElementById("motiu").value.trim();
                if(!assig||!motiu){ alert("Tria assignatura i escriu motiu"); return; }
                alert(`Justificació enviada per ${assig}: ${motiu}`);
            };
        }

        else if(val==="missatge"){
            panel.innerHTML=`<input type='email' id='emailDest' placeholder='Email del destinatari'>
                               <textarea id='msgText' placeholder='Escriu missatge'></textarea>
                               <button id='sendMsgBtn'>Enviar</button>`;
            document.getElementById("sendMsgBtn").onclick=()=>{
                const email=document.getElementById("emailDest").value.trim();
                const text=document.getElementById("msgText").value.trim();
                if(!email||!text){ alert("Completa tots els camps"); return; }
                alert(`Missatge enviat a ${email}: ${text}`);
            };
        }
    };
});
