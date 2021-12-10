import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IRequestHeader {
  user_id: string;
}
class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    console.log(request.headers);

    try {
      const users = this.listAllUsersUseCase.execute({
        user_id,
      } as IRequestHeader);
      return response.json(users);
    } catch {
      return response.status(400).json({ error: "Forbidden operation" });
    }
  }
}

export { ListAllUsersController };
