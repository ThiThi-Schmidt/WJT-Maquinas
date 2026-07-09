import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserService } from "./userService.js";

const userService = new UserService();

export class AuthService {
  async authenticate(jwtSecret: string, email: string, password: string) {
    const user = await userService.findByEmail(email);

    if (!user) {
      const err: any = new Error("Credenciais inválidas");
      err.status = 401;
      throw err;
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      const err: any = new Error("Credenciais inválidas");
      err.status = 401;
      throw err;
    }

    const token = jwt.sign(
      {
        sub: user.id,
        email: user.email,
        role: user.role,
      },
      jwtSecret,
    );

    return {
      token,
      user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      },
    };
  }

  async register(name: string, email: string, password: string, role?: string) {
    const exists = await userService.findByEmail(email);

    if (exists) {
      const err: any = new Error("Este e-mail já está cadastrado.");
      err.status = 400;
      throw err;
    }

    const user = await userService.create(
      name,
      email,
      password,
      role as any
    );

    return {
      message: "Usuário criado com sucesso!",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }

}