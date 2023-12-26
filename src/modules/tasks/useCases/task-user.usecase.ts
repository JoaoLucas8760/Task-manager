import { Injectable } from '@nestjs/common';
import { TaskUserRequestDTO } from '../dtos/task-user-request.dto';
import { ITaskUserRepository } from '../repositories/task-user.repository';

@Injectable()
export class CreateTaskUserUseCase {
  constructor(private taskUserRepository: ITaskUserRepository) {}

  async execute(data: TaskUserRequestDTO) {
    return this.taskUserRepository.save(data);
  }
}
