const nomes = ["Gabriel", "Eduardo", "Emerson", "Marlon", "Lucas", "Aguinaldo"];
export function aleatorio (lista){
    const posicao = Math.floor (Math.random()*lista.lenght);
    return lista [posicao];
}
export const nome = aleatorio(nomes)