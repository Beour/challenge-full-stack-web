<template>
	
	<v-card>
		<v-card-title>
			<v-text-field
				v-model="search"
				append-icon="mdi-magnify"
				label="Buscar"
				single-line
				hide-details
			></v-text-field>
		</v-card-title>
		<v-data-table
			:headers="headers"
			:items="students"
			:search="search"
		>
			<template v-slot:[`item.actions`]="{ item }">
				<v-btn :to="{ name: 'Edit', params: item }" title="Editar" class="mx-1"><v-icon small>mdi-pencil</v-icon></v-btn>
				<v-btn @click="deleteStudent(item)" title="Excluir" class="mx-1"><v-icon small>mdi-delete</v-icon></v-btn>
			</template>
		</v-data-table>
	</v-card>

</template>

<script>
import api from "../services/api"

export default {
	data () {
		return {
			search: '',
			headers: [
				{
					text: 'Registro Acadêmico',
					align: 'start',
					value: "studentID",
				},
				{
					text: 'Nome',
					value: 'name'
				},
				{
					text: 'CPF',
					value: 'cpf'
				},
				{ 
					text: 'Ações', 
					value: 'actions', 
					sortable: false 
				},		
			
			],
			
			students: []
		}
	},
	created: function() {
		this.getStudents();
	},
	methods: {
		getStudents(){
			api.get("student").then((response) => {
				this.students = response.data.data;
			});
		},

		deleteStudent(student){

			this.$confirm(`O aluno ${student.name} será excluído. Deseja continuar?`,"Excluir","question")
			.then(() => {
				api
				.delete(`/student/${student.studentID}`)
				.then((response) => {
					if (response.data.error)
						this.$alert("Não foi possível excluir o registro","Erro!","error")
					else{
						this.getStudents()
						this.$alert("Registro excluído com sucesso","Sucesso!","success")
					}
				})
			})				
		}
	},
	name: 'Home',
	props: {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.students-list {
	width: 100%;
	border: 3px solid #000000;
	margin-top: 10px;
	text-align: center;
}
.students-list thead {
  font-weight: bold;
}
</style>
