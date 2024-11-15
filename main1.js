class Wallet {
    constructor(bankName, pin) {
        this.bankName = bankName
        this.pin = pin
        this.balance = 0 //tai khoan bang 0 luc tao the
    }
    //phuong thuc gui tien vao tai khoan
    deposit(value) {
        this.balance += value

    }
    //rut tien
    withdraw(value) {
        if (value > this.balance) {
            console.log("So tien trong tai khoan khong du");
            
        }
        else {
            this.balance -= value
            console.log("rut rien thanh cong");
            
        }
    }
}

//tao doi tuong
const wallet = new Wallet("MB bank", "1234")
 console.log(wallet.balance);

 //gui tien 
 wallet.deposit(1000)
 //rut rien
 wallet.withdraw(250)
 //xem tai khoan, pin
 console.log();
 
 console.log(wallet.balance);
 
 
