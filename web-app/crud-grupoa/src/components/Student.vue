<template>
	
	<div id="form">
		<validation-observer
			ref="observer"
			
		>
			<form @submit.prevent="submit">
				<p>Cadastro de Aluno</p>

				<validation-provider
					v-slot="{ errors }"
					name="Registro Acadêmico"
					rules="required|max:6|digits:6"
				>
					<v-text-field 
						v-model="studentID"
						:counter="6"
						:error-messages="errors"
						label="Registro Acadêmico"
						required
					></v-text-field>
				</validation-provider>
				<validation-provider
					v-slot="{ errors }"
					name="Nome"
					rules="required"
				>
					<v-text-field 
						v-model="name"
						:error-messages="errors"
						label="Nome"
						required
					></v-text-field>
				</validation-provider>
				<validation-provider
					v-slot="{ errors }"
					name="Email"
					rules="email"
				>
					<v-text-field 
						v-model="email"
						:error-messages="errors"
						label="E-mail"
					></v-text-field>
				</validation-provider>
				<validation-provider
					v-slot="{ errors }"
					name="CPF"
					rules="digits:11|max:11"
				>
					<v-text-field 
						v-model="cpf"
						:counter="11"
						:error-messages="errors"
						label="CPF"
						required
					></v-text-field>
				</validation-provider>
				<v-btn class="mx-2" type="submit">Cadastrar</v-btn>
				<v-btn class="mx-2" @click="clear">Limpar</v-btn>
				<v-btn class="mx-2" to="/home">Cancelar</v-btn>
			</form>
		</validation-observer>
	</div>

</template>

<script>
import { required, digits, email, max } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import api from "../services/api"

setInteractionMode('eager')
extend('digits', {
	...digits,
	message: '{_field_} deve ter {length} digitos. ({_value_})',
})
extend('required', {
	...required,
	message: '{_field_} tem preenchimento obrigatório',
})

extend('max', {
	...max,
	message: '{_field_} tem tamanho máximo de {length} caracteres',
})

extend('email', {
	...email,
	message: 'Email inválido',
})

export default {
	components: {
		ValidationProvider,
		ValidationObserver
	},
	data: () => ({
		studentID:"",
		name:"",
		email:"",
		cpf:"",
	}),
	methods: {
		submit ( ) {
			api.post("student",{
				studentID  : this.studentID,
				name 		: this.name,	
				email 		: this.email, 		
				cpf 		: this.cpf
			}) 
			.then((response) => {
				if (response.data.error)
					this.$alert("Não foi possível cadastrar aluno", "Erro!","error")
				else {
					this.$alert("Aluno cadastrado com sucesso!","Sucesso!","success")
					this.clear()
				}
			}) 
			.catch((error) =>{
				alert('erro',error)
			})
		},
		clear () {
			this.studentID = ""
			this.name 		= ""
			this.email 		= ""
			this.cpf 		= ""
			this.$refs.observer.reset()
		}
	},
    name: 'Student',
    props: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
	font-size: 20px;
	text-align: left;
	background-color: #bdbdbd91;
	padding: 10px; 
}
#form{
	border-radius: 15px;
	border: 3px solid #000000;
	padding: 50px 40px;
	margin: 25px;
	text-align: center;

}
</style>
