const frm = document.getElementById("frm");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let tarefa = document.getElementById("tarefa").value ;
    console.log(tarefa)
    let lista = document.getElementById("li");
    document.createElement("li").innerHTML = tarefa
    lista.append(tarefa)
})

