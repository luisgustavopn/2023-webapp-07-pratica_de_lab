import { useState } from "react";
import "./App.css";

const AppNavBar = () => {
	return (
		<div className="card">
			<h1>Lista de tarefas</h1>
		</div>
	);
};

const AppTarefaAdicionar = (props: any) => {
	return (
		<div className="card">
			<label>Adicionar Tarefa: </label>
			<input type="text" value={props.valor} onChange={props.escrever} />
			<button onClick={props.adicionar}>Adicionar</button>
		</div>
	);
};

const AppTarefaEditar = (props: any) => {
	return (
		<div className="card">
			<label>Editar Tarefa: </label>
			<input type="text" value={props.valor} onChange={props.editar} />
			<button onClick={props.salvar}>Editar</button>
		</div>
	);
};

const AppTarefaLista = (props: any) => {
	return (
		<div className="card">
			<ul>
				{props.data.map((item: string, indice: number) => (
					<li key={indice} onClick={props.pegar}>{item}</li>
				))}
			</ul>
		</div>
	);
};

const App = () => {
	const [tarefa, setTarefa] = useState("");
	const [tarefaEdit, setTarefaEdit] = useState("");
	const tratarMudancaTexto = (e: any) => setTarefa(e.target.value);
	const tratarEditTexto = (e: any) => setTarefaEdit(e.target.value);
	const [tarefas, setTarefas] = useState([
		"Prototipar interface do usuário",
		"Implementar com HTML a interface com o usuário em React",
		"Extrair componentes React da implementação HTML",
		"Transferir os dados do HTML dos componentes React para variáveis",
		"Modificar os dados de variáveis para estado ou propriedades de componentes",
		"Elevar os estados dos componentes quando tiver dados compartilhados",
		"Programar a modificação dos estados",
	]);
	const tarefaAdicionar = () => {
		const novalista = tarefas;
		novalista.push(tarefa);
		setTarefas(novalista);
		setTarefa("");
	};
	const Pegartarefa = (e: any) => {
		console.log(e.target.textContent);
		setTarefaEdit(e.target.textContent);
	}
	const SalvarTarefaEdit = (e: any) => {
		const newlista = tarefas;
		const index = newlista.indexOf(e.target.value);
		if (index !== -1) {
    		newlista[index] = "Josias";
		}
	}

	return (
		<div>
			<AppNavBar />
			<AppTarefaAdicionar
				valor={tarefa}
				escrever={tratarMudancaTexto}
				adicionar={tarefaAdicionar}
			/>
			<AppTarefaEditar
				valor={tarefaEdit}
				editar={tratarEditTexto}
				salvar={SalvarTarefaEdit}
			/>
			<AppTarefaLista 
				data={tarefas} 
				pegar={Pegartarefa} />
		</div>
	);
};

export default App;