document.addEventListener("DOMContentLoaded", ()=>{
    const role = localStorage.getItem("edu_role");
    if(role!=="profe"){ window.location.href="../index.html"; return; }

    document.getElementById("logout").onclick = ()=>{ localStorage.clear(); window.location.href="../index.html"; };

    const panel=document.getElementById("panelContent");

    const assignaturesASIX=["Implantació de sistemes operatius","Fonaments de maquinari","Gestió de bases de dades","Seguretat i alta disponibilitat"];
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

    // Template email from school
    const emailTemplate = `Benvolgut alumne/a,

Aquesta comunicació és per informar-vos que heu superat el llindar d'absències acceptable en les vostres assignatures. Segons la normativa de l'escola, les absències superiors al 20% requereixen atenció immediata.

Es recomana que:
- Us poseu en contacte amb els vostres professors per justificar les absències
- Presenteu els documents de justificació corresponents
- Assistiu de forma regular a les classes per millorar l'assistència

Si teniu alguna dubte, no dubteu en contactar amb l'administració de l'escola.

Saludos cordials,
Administració de l'escola`;

    document.getElementById("opcioSelect").onchange = ()=>{
        const val=document.getElementById("opcioSelect").value;
        panel.innerHTML="";

        if(val==="passar"){
            let html="<select id='assigSelect'><option value=''>Tria assignatura</option>";
            assignaturesASIX.forEach(a=>{ html+=`<option value='${a}'>${a}</option>`; });
            html+="</select><label>Hora inici:</label><input type='number' id='hstart' min='8' max='21' value='8'>";
            html+="<label>Hora final:</label><input type='number' id='hend' min='8' max='21' value='9'>";
            html+="<button id='genLlista'>Generar Llista</button>";
            html+="<div id='llistaDiv'></div>";
            panel.innerHTML=html;

            document.getElementById("genLlista").onclick=()=>{
                const assig=document.getElementById("assigSelect").value;
                const hstart=parseInt(document.getElementById("hstart").value);
                const hend=parseInt(document.getElementById("hend").value);
                if(!assig){ alert("Tria assignatura"); return; }
                if(hend<=hstart){ alert("Hora final ha de ser major que inicial"); return; }

                let lhtml="<table><tr><th>Alumne</th><th>Present</th><th>Absent</th><th>Retard</th></tr>";
                alumnes.forEach((a,i)=>{
                    lhtml+=`<tr>
                        <td>${a}</td>
                        <td><input type='radio' name='p${i}' value='present'></td>
                        <td><input type='radio' name='p${i}' value='absent'></td>
                        <td><input type='radio' name='p${i}' value='retard'></td>
                    </tr>`;
                });
                lhtml+="</table><button id='confirmBtn'>Confirmar Llista</button>";
                document.getElementById("llistaDiv").innerHTML=lhtml;
                document.getElementById("confirmBtn").onclick=()=>{ alert("Llista confirmada OK"); };
            };
        }

        else if(val==="avisar"){
            panel.innerHTML=`
                <h3>Avisar sobre Faltes (>20%)</h3>
                <label>Text del email (plantilla escola):</label>
                <textarea id='emailContent' style='width:100%; height:200px; border:1px solid #555; padding:10px;'>${emailTemplate}</textarea>
                <br/><br/>
                <label>Selecciona alumne per enviar l'email:</label>
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
                <button id='sendEmailBtn'>Enviar Email</button>
                <p id='emailStatus' style='color:green; margin-top:10px;'></p>
            `;

            document.getElementById("sendEmailBtn").onclick = ()=>{
                const selectedStudent = document.getElementById("studentSelect").value;
                const emailText = document.getElementById("emailContent").value.trim();
                
                if(!selectedStudent){
                    alert("Selecciona un alumne");
                    return;
                }
                
                if(!emailText){
                    alert("Escriu el contingut de l'email");
                    return;
                }
                
                document.getElementById("emailStatus").innerHTML = `✓ Email enviat a ${selectedStudent}`;
                document.getElementById("studentSelect").value = '';
                document.getElementById("emailContent").value = emailTemplate;
            };
        }

        else if(val==="missatge"){
            panel.innerHTML=`<select id='destSelect'>
                                <option value=''>-- Tria destinatari --</option>
                                <option value='tots'>Tots els alumnes</option>
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
            };
        }
    };
});