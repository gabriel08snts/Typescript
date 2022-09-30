/* O generic no TypeScript nos permite reutilizar uma determinada implementação de código, de forma tipada. Para representar um generic, 
nós declaramos ele dessa forma <T> (podendo ser utilizado qualquer outra letra, existem as convenções que podemos seguir: */

// <S> → Representando State <T> → Representando Type <K> → Representando Key <V> → Representando Value <E> → Representando Element

// Exemplo de um trecho de código utilizando generics:

function useState<T extends string | number = boolean>() { // Nessa linha o Generic pode ser definido a primeira vez como um string ou um number, mas caso nenhum deles
    let state: T;                                          // seja escolhido o padrão será aquele após o sinal de =, no caso será boolean.

    function get(){
        return state;
    }

    function set(newValue: T){
        state = newValue;
    }

    return { get, set}
}

let newState = useState<string>();
newState.get();
newState.set("João");
newState.set(123);

/* Os generics funcionam de um aforma que, a partir do momento que eu declarar qual será o tipo daquela variável
ela só aceitará valores daquele tipo de agora em diante. */
