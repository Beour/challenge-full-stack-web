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
		></v-data-table>
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
