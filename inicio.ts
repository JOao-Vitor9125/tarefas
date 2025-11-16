class Hospede{

    private hospedes : string[]=[]
    
    checkInHospede(cliente:string){
        if(this.hospedes.includes(cliente)){
            console.log("Esse cliente ja está cadastrado");
            return;
        }
        this.hospedes.push(cliente);
    }

    checkOutHospede(cliente:string){
        if(this.hospedes.includes(cliente)){
            this.hospedes = this.hospedes.filter(s => s !== cliente);
        }
        else console.log("Esse cliente não está registrado"); return;
    }

    returnHospedes(){
        return this.hospedes;
    }

}

class Quarto{
    private quartos:number[]=[]

    ocuparQuarto(quarto:number){
        if(this.quartos.includes(quarto)){
            console.log("Quarto ocupado");
            return;
        }
        this.quartos.push(quarto);
    }

    desocuparQuarto(quarto:number){
        this.quartos = this.quartos.filter(s => s !== quarto);
    }

    returnQuartos(){
        return this.quartos;
    }
}

class Notificacoes{
    enviarEmailEntrada(email: string){
    let e = `E-mail de check-in enviado para: ${email}\n`;
    console.log(e);
    }

    enviarEmailSaida(email:string){
    let e = `E-mail de check-out enviado para: ${email}\n`;
    console.log(e);
    }

}

class Recepcao{
    private hospede:Hospede;
    private quarto:Quarto;
    private notificacao:Notificacoes;

    constructor(){
        this.hospede = new Hospede();
        this.quarto = new Quarto();
        this.notificacao = new Notificacoes();
    }

    entradaHospede(nome:string, n_quarto:number, email:string){ 
        this.hospede.checkInHospede(nome); 
        this.quarto.ocuparQuarto(n_quarto);
        this.notificacao.enviarEmailEntrada(email);
    }

    saidaHospede(nome:string, n_quarto:number, email:string){
        this.hospede.checkOutHospede(nome);
        this.quarto.desocuparQuarto(n_quarto);
        this.notificacao.enviarEmailSaida(email);
    }

    mostrarOcupacoes(){
        console.log(`Hospedes registrados no momento: ${this.hospede.returnHospedes()}\n`);
        console.log(`Quartos ocupados: ${this.quarto.returnQuartos()}\n`);
    }

    quartoPorHospede(nome:string){
        
    
        let pos= this.hospede.returnHospedes().indexOf(nome);
        let room = this.quarto.returnQuartos()[pos];

        if(!room){
            console.log(`Hóspede ${nome} não está hospedado aqui no momento\n`);
            return;
        }

        console.log(`O(a) hóspede ${nome} está no quarto: ${room}\n`);
    }
}

const recepcao = new Recepcao();

recepcao.entradaHospede("joao", 43, "joao@gmail.coom");
recepcao.mostrarOcupacoes();

recepcao.quartoPorHospede("joao");

//recepcao.saidaHospede("joao", 43, "joao@gmail.com");
recepcao.mostrarOcupacoes();
recepcao.entradaHospede("maria", 69, "maria@gmail.coom");
recepcao.mostrarOcupacoes();



recepcao.quartoPorHospede("joao");

recepcao.quartoPorHospede("maria");


