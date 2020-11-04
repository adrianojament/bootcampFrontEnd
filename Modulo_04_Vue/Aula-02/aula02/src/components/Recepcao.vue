<template>
  <div>
    <h1>Bem vindo ao PetShop</h1>
    <form>
      <div>
        <label class="espaco-lado" for="iptNome">Nome do Cliente:</label>
        <input type="text" name="iptNome" id="iptNome" />
      </div>
      <div class="espaco-baixo"></div>
      <div>
        <label class="espaco-lado" for="selRacas">Raça do Cão:</label>
        <select name="selRacas" id="selRacas">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div class="espaco-baixo"></div>
      <div>
        <label class="espaco-lado" for="iptIdade">Idade:</label>
        <input type="number" name="iptIdade" id="iptIdade" />
      </div>
      <div class="espaco-baixo"></div>
      <div>
        <label class="espaco-lado" for="selServicos">Serviço:</label>
        <select name="selServicos" id="selServicos">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div class="espaco-baixo"></div>
      <div>
        <button>Cadastrar Cliente</button>
      </div>
    </form>
  </div>
</template>

<script>
// Parei na aula 4.8 - 08:57
export default {};
</script>

<style lang="scss" scoped>
.espaco-baixo {
  margin-top: 10px;
}
.espaco-lado {
  font-weight: bold;
}
</style>