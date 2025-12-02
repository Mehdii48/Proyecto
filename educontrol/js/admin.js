document.addEventListener("DOMContentLoaded", ()=>{
    const role = localStorage.getItem("edu_role");
    if(role!=="admin"){ window.location.href="../index.html"; return; }

    document.getElementById("logout").onclick=()=>{ localStorage.clear(); window.location.href="../index.html"; };

    const panel=document.getElementById("panelContent");

    let usuaris=[
        {user:"alumne", rol:"alumne", permisos:"Veure faltas,Justificar,Falta,Missatge"},
        {user:"profe", rol:"profe", permisos:"Passar llista,Missatges,Veure assignatures"},
        {user:"admin", rol:"admin", permisos:"Tot"}
    ];

    const alumnes=["Marc","Anna","Pau","Laia","Joan","Clara","Nil","Iris","Pol","Sara"];

    // All students' faltes data
    const allStudentsData = {
        "Marc": [
            {assignatura:"TU (Tutoria)", present:3, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"OPT (Cloud)", present:17, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"(1709) IPO1", present:13, absent:9, just:0, retard:0, percent:"41%"},
            {assignatura:"PRO (Projectes)", present:42, absent:11, just:0, retard:0, percent:"21%"},
            {assignatura:"(1710) IPO2", present:13, absent:3, just:0, retard:0, percent:"19%"},
            {assignatura:"(0374) ASO", present:24, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"(0375) SXI", present:11, absent:3, just:0, retard:0, percent:"21%"},
            {assignatura:"(0376) IAW", present:12, absent:2, just:0, retard:0, percent:"14%"},
            {assignatura:"(0378) SAD", present:12, absent:0, just:0, retard:0, percent:"0%"}
        ],
        "Anna": [
            {assignatura:"TU (Tutoria)", present:3, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"OPT (Cloud)", present:17, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"(1709) IPO1", present:13, absent:9, just:0, retard:0, percent:"41%"},
            {assignatura:"PRO (Projectes)", present:42, absent:11, just:0, retard:0, percent:"21%"},
            {assignatura:"(1710) IPO2", present:13, absent:3, just:0, retard:0, percent:"19%"},
            {assignatura:"(0374) ASO", present:24, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"(0375) SXI", present:11, absent:3, just:0, retard:0, percent:"21%"},
            {assignatura:"(0376) IAW", present:12, absent:2, just:0, retard:0, percent:"14%"},
            {assignatura:"(0378) SAD", present:12, absent:0, just:0, retard:0, percent:"0%"}
        ],
        "Pau": [
            {assignatura:"TU (Tutoria)", present:3, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"OPT (Cloud)", present:17, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"(1709) IPO1", present:13, absent:9, just:0, retard:0, percent:"41%"},
            {assignatura:"PRO (Projectes)", present:42, absent:11, just:0, retard:0, percent:"21%"},
            {assignatura:"(1710) IPO2", present:13, absent:3, just:0, retard:0, percent:"19%"},
            {assignatura:"(0374) ASO", present:24, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"(0375) SXI", present:11, absent:3, just:0, retard:0, percent:"21%"},
            {assignatura:"(0376) IAW", present:12, absent:2, just:0, retard:0, percent:"14%"},
            {assignatura:"(0378) SAD", present:12, absent:0, just:0, retard:0, percent:"0%"}
        ],
        "Laia": [
            {assignatura:"TU (Tutoria)", present:3, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"OPT (Cloud)", present:17, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"(1709) IPO1", present:13, absent:9, just:0, retard:0, percent:"41%"},
            {assignatura:"PRO (Projectes)", present:42, absent:11, just:0, retard:0, percent:"21%"},
            {assignatura:"(1710) IPO2", present:13, absent:3, just:0, retard:0, percent:"19%"},
            {assignatura:"(0374) ASO", present:24, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"(0375) SXI", present:11, absent:3, just:0, retard:0, percent:"21%"},
            {assignatura:"(0376) IAW", present:12, absent:2, just:0, retard:0, percent:"14%"},
            {assignatura:"(0378) SAD", present:12, absent:0, just:0, retard:0, percent:"0%"}
        ],
        "Joan": [
            {assignatura:"TU (Tutoria)", present:3, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"OPT (Cloud)", present:17, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"(1709) IPO1", present:13, absent:9, just:0, retard:0, percent:"41%"},
            {assignatura:"PRO (Projectes)", present:42, absent:11, just:0, retard:0, percent:"21%"},
            {assignatura:"(1710) IPO2", present:13, absent:3, just:0, retard:0, percent:"19%"},
            {assignatura:"(0374) ASO", present:24, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"(0375) SXI", present:11, absent:3, just:0, retard:0, percent:"21%"},
            {assignatura:"(0376) IAW", present:12, absent:2, just:0, retard:0, percent:"14%"},
            {assignatura:"(0378) SAD", present:12, absent:0, just:0, retard:0, percent:"0%"}
        ],
        "Clara": [
            {assignatura:"TU (Tutoria)", present:3, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"OPT (Cloud)", present:17, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"(1709) IPO1", present:13, absent:9, just:0, retard:0, percent:"41%"},
            {assignatura:"PRO (Projectes)", present:42, absent:11, just:0, retard:0, percent:"21%"},
            {assignatura:"(1710) IPO2", present:13, absent:3, just:0, retard:0, percent:"19%"},
            {assignatura:"(0374) ASO", present:24, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"(0375) SXI", present:11, absent:3, just:0, retard:0, percent:"21%"},
            {assignatura:"(0376) IAW", present:12, absent:2, just:0, retard:0, percent:"14%"},
            {assignatura:"(0378) SAD", present:12, absent:0, just:0, retard:0, percent:"0%"}
        ],
        "Nil": [
            {assignatura:"TU (Tutoria)", present:3, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"OPT (Cloud)", present:17, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"(1709) IPO1", present:13, absent:9, just:0, retard:0, percent:"41%"},
            {assignatura:"PRO (Projectes)", present:42, absent:11, just:0, retard:0, percent:"21%"},
            {assignatura:"(1710) IPO2", present:13, absent:3, just:0, retard:0, percent:"19%"},
            {assignatura:"(0374) ASO", present:24, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"(0375) SXI", present:11, absent:3, just:0, retard:0, percent:"21%"},
            {assignatura:"(0376) IAW", present:12, absent:2, just:0, retard:0, percent:"14%"},
            {assignatura:"(0378) SAD", present:12, absent:0, just:0, retard:0, percent:"0%"}
        ],
        "Iris": [
            {assignatura:"TU (Tutoria)", present:3, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"OPT (Cloud)", present:17, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"(1709) IPO1", present:13, absent:9, just:0, retard:0, percent:"41%"},
            {assignatura:"PRO (Projectes)", present:42, absent:11, just:0, retard:0, percent:"21%"},
            {assignatura:"(1710) IPO2", present:13, absent:3, just:0, retard:0, percent:"19%"},
            {assignatura:"(0374) ASO", present:24, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"(0375) SXI", present:11, absent:3, just:0, retard:0, percent:"21%"},
            {assignatura:"(0376) IAW", present:12, absent:2, just:0, retard:0, percent:"14%"},
            {assignatura:"(0378) SAD", present:12, absent:0, just:0, retard:0, percent:"0%"}
        ],
        "Pol": [
            {assignatura:"TU (Tutoria)", present:3, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"OPT (Cloud)", present:17, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"(1709) IPO1", present:13, absent:9, just:0, retard:0, percent:"41%"},
            {assignatura:"PRO (Projectes)", present:42, absent:11, just:0, retard:0, percent:"21%"},
            {assignatura:"(1710) IPO2", present:13, absent:3, just:0, retard:0, percent:"19%"},
            {assignatura:"(0374) ASO", present:24, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"(0375) SXI", present:11, absent:3, just:0, retard:0, percent:"21%"},
            {assignatura:"(0376) IAW", present:12, absent:2, just:0, retard:0, percent:"14%"},
            {assignatura:"(0378) SAD", present:12, absent:0, just:0, retard:0, percent:"0%"}
        ],
        "Sara": [
            {assignatura:"TU (Tutoria)", present:3, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"OPT (Cloud)", present:17, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"(1709) IPO1", present:13, absent:9, just:0, retard:0, percent:"41%"},
            {assignatura:"PRO (Projectes)", present:42, absent:11, just:0, retard:0, percent:"21%"},
            {assignatura:"(1710) IPO2", present:13, absent:3, just:0, retard:0, percent:"19%"},
            {assignatura:"(0374) ASO", present:24, absent:0, just:0, retard:0, percent:"0%"},
            {assignatura:"(0375) SXI", present:11, absent:3, just:0, retard:0, percent:"21%"},
            {assignatura:"(0376) IAW", present:12, absent:2, just:0, retard:0, percent:"14%"},
            {assignatura:"(0378) SAD", present:12, absent:0, just:0, retard:0, percent:"0%"}
        ]
    };

    document.getElementById("opcioSelect").onchange=()=>{
        const val=document.getElementById("opcioSelect").value;
        panel.innerHTML="";
        
        if(val==="usuaris"){
            function drawUsers(){
                let html="<table><tr><th>Usuari</th><th>Rol</th><th>Permisos</th><th>Accions</th></tr>";
                usuaris.forEach((u,i)=>{
                    html+=`<tr>
                        <td>${u.user}</td>
                        <td>${u.rol}</td>
                        <td>${u.permisos}</td>
                        <td><button onclick="delUser(${i})">Eliminar</button></td>
                    </tr>`;
                });
                html+="</table>";
                panel.innerHTML=html+"<button id='addUserBtn'>Afegir Usuari</button>";
                document.getElementById("addUserBtn").onclick=()=>{
                    const user=prompt("Nom usuari");
                    const rol=prompt("Rol: alumne/profe/admin");
                    const permisos=prompt("Permisos separats per coma");
                    if(user && rol && permisos){ usuaris.push({user,rol,permisos}); drawUsers(); alert("Afegit OK"); }
                };
            }
            window.delUser=(i)=>{ if(confirm("Segur que vols eliminar?")){ usuaris.splice(i,1); drawUsers(); alert("Eliminat OK"); } };
            drawUsers();
        }
        
        else if(val==="faltes"){
            panel.innerHTML=`
                <h3>Veure Faltes dels Alumnes</h3>
                <label>Selecciona alumne:</label>
                <select id='studentSelect'>
                    <option value=''>-- Tria un alumne --</option>
                    <option value='Marc'>Marc</option>
                    <option value='Anna'>Anna</option>
                    <option value='Pau'>Pau</option>
                    <option value='Laia'>Laia</option>
                    <option value='Joan'>Joan</option>
                    <option value='Clara'>Clara</option>
                    <option value='Nil'>Nil</option>
                    <option value='Iris'>Iris</option>
                    <option value='Pol'>Pol</option>
                    <option value='Sara'>Sara</option>
                </select>
                <div id='resultContainer' style='margin-top:20px;'></div>
            `;
            
            document.getElementById("studentSelect").onchange = (e)=>{
                const selectedStudent = e.target.value;
                const resultContainer = document.getElementById("resultContainer");
                
                if(!selectedStudent){
                    resultContainer.innerHTML = "";
                    return;
                }
                
                const faltas = allStudentsData[selectedStudent];
                let html = `<h4>Faltes de <strong>${selectedStudent}</strong></h4>`;
                html += `<table>
                    <tr>
                        <th>Assignatura</th>
                        <th>Present</th>
                        <th>Absent</th>
                        <th>Justificada</th>
                        <th>Retard</th>
                        <th>% Absència</th>
                    </tr>
                `;
                
                faltas.forEach(f=>{
                    const percentValue = parseInt(f.percent);
                    let color = percentValue > 20 ? 'color:red;' : '';
                    html += `<tr>
                        <td>${f.assignatura}</td>
                        <td>${f.present}</td>
                        <td style='${color}'><strong>${f.absent}</strong></td>
                        <td>${f.just}</td>
                        <td>${f.retard}</td>
                        <td style='${color}'><strong>${f.percent}</strong></td>
                    </tr>`;
                });
                
                html += `</table>`;
                resultContainer.innerHTML = html;
            };
        }
        
        else if(val==="missatge"){
            panel.innerHTML=`
                <label>Selecciona destinatari:</label>
                <select id='destSelect'>
                    <option value=''>-- Tria destinatari --</option>
                    <option value='tots'>Tots els usuaris</option>
                    <option value='Marc'>Marc</option>
                    <option value='Anna'>Anna</option>
                    <option value='Pau'>Pau</option>
                    <option value='Laia'>Laia</option>
                    <option value='Joan'>Joan</option>
                    <option value='Clara'>Clara</option>
                    <option value='Nil'>Nil</option>
                    <option value='Iris'>Iris</option>
                    <option value='Pol'>Pol</option>
                    <option value='Sara'>Sara</option>
                </select>
                <textarea id='msgText' placeholder='Escriu missatge'></textarea>
                <button id='sendMsgBtn'>Enviar</button>`;
            document.getElementById("sendMsgBtn").onclick=()=>{
                const dest=document.getElementById("destSelect").value;
                const text=document.getElementById("msgText").value.trim();
                if(!dest){ alert("Selecciona destinatari"); return; }
                if(!text){ alert("Escriu el missatge"); return; }
                alert(`Missatge enviat a ${dest}: ${text}`);
                document.getElementById("msgText").value="";
                document.getElementById("destSelect").value="";
            };
        }
    };
});