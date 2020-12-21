<template>
  <v-app>
    <v-app-bar app>

      <div class="d-flex align-center">
        <v-btn to="/Home" title="Início" class="mx-1" >
          <v-icon >mdi-home</v-icon>
        </v-btn>
        <v-btn to="/student" title="Cadastrar" class="mx-1" >
          Cadastrar Aluno
        </v-btn>
        

      </div>

    </v-app-bar>

    <v-main>
      <v-container fluid> <router-view></router-view></v-container>
    </v-main>

  </v-app>
</template>

<script>
export default {};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}

</style>