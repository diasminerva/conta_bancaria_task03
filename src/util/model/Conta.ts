export abstract class Conta {

    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    protected _saldo: number;

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }

    public get numero(): number {
        return this._numero;
    }

    public get agencia(): number {
        return this._agencia;
    }

    public set agencia(value: number) {
        this._agencia = value;
    }

    public get tipo(): number {
        return this._tipo;
    }

    public set tipo(value: number) {
        this._tipo = value;
    }

    public get titular(): string {
        return this._titular;
    }

    public set titular(value: string) {
        this._titular = value;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public set saldo(value: number) {
        this._saldo = value;
    }

    public visualizar(): void {
        console.log("\n*******************************");
        console.log("DADOS DA CONTA");
        console.log("*******************************");
        console.log("Número da Conta: " + this._numero);
        console.log("Agência: " + this._agencia);
        console.log("Tipo da Conta: " + this._tipo);
        console.log("Titular: " + this._titular);
        console.log("Saldo: " + this._saldo.toFixed(2));
    }

    public sacar(valor: number): boolean {
        if (this._saldo < valor) {
            console.log("Saldo insuficiente!");
            return false;
        }

        this._saldo -= valor;
        return true;
    }

    public depositar(valor: number): void {
        this._saldo += valor;
    }

    public transferir(valor: number, contaDestino: Conta): boolean {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
}