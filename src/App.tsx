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
			<label>Tarefa: </label>
			<input type="text" value={props.valor} onChange={props.mudar} />
			<button onClick={props.adicionar}>Adicionar</button>
		</div>
	);
};

const AppTarefaLista = (props: any) => {
	return (
		<div className="card">
			<ul>
				{props.data.map((item: string, indice: number) => (
					<li key={indice} onClick={props.editar}>{item}</li>
				))}
			</ul>
		</div>
	);
};

const App = () => {
	const [tarefa, setTarefa] = useState("");
	const tratarMudancaTexto = (e: any) => setTarefa(e.target.value);
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
	const tarefaMudar = (e: any) => {
		console.log(e.target.textContent);
		
		setTarefa(e.target.textContent);
	}

	return (
		<>
			<AppNavBar />
			<AppTarefaAdicionar
				valor={tarefa}
				mudar={tratarMudancaTexto}
				adicionar={tarefaAdicionar}
			/>
			<AppTarefaLista data={tarefas} editar={tarefaMudar} />
		</>
	);
};

export default App;