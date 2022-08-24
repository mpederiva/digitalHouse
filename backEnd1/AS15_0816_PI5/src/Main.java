import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Empresa> funcionario = new ArrayList<>();

        Funcionario f1 = new Funcionario("Marta", "Pederiva", "111-222-333-09", 5200.0);
        Empresa emp = new Empresa(" XXX/0001-XX", "tech", f1);

        funcionario.add(emp);

        try {
            FileOutputStream fileOutputStream = new FileOutputStream("OutputFuncionario.txt");
            ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream);

            objectOutputStream.writeObject(funcionario);

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        List<Empresa> funcionario1 = null;
        try {
            FileInputStream fileInputStream = new FileInputStream("OutputFuncionario.txt");
            ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);

            funcionario1 = (List<Empresa>) objectInputStream.readObject();
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

        for (Empresa e: funcionario1) {
            System.out.println(e.getCNPJ() + ": " + e.getRazaoSocial());
        }
    }
}
