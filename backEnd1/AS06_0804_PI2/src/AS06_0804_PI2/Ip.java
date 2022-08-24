package AS06_0804_PI2;

class Ip {
    private final int[] numeroIp = new int[4];

    protected Ip(int n1, int n2, int n3, int n4) {
        this.numeroIp[0] = n1;
        this.numeroIp[1] = n2;
        this.numeroIp[2] = n3;
        this.numeroIp[3] = n4;
    }

    @Override
    public String toString() {
        return "Ip ["+this.numeroIp[0]+"."+
                this.numeroIp[1]+"."+
                this.numeroIp[2]+"."+
                this.numeroIp[3]+" ]";
    }

    protected String getPais() {
        String pais="";
        if(numeroIp[0]<=49){
            pais = "Argentina";
        }
        if((numeroIp[0]>=50 && numeroIp[0]<=99)){
            pais = "Brasil";
        }
        if(numeroIp[0]>=100 && numeroIp[0]<=149) {
            pais = "Chile";
        }
        if(numeroIp[0]>=150 && numeroIp[0]<=255) {
            pais = "Não disponível no seu país :(";
        }
        return pais;
    }
}