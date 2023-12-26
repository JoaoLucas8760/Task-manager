import { TaskUserResponseDTO } from '../dtos/taks-user-response.dto';
import { TaskUserRequestDTO } from '../dtos/task-user-request.dto';
import { ITaskUserRepository } from './task-user.repository';
import { PrismaService } from 'src/infra/database/prisma.service';

export class TaskUserPrismaRepository implements ITaskUserRepository {
  constructor(private prisma: PrismaService) {}

  async save(data: TaskUserRequestDTO): Promise<TaskUserResponseDTO> {
    return await this.prisma.taskUser.create({
      data: {
        task: {
          create: {
            description: data.description,
            endAt: data.endAt,
            startAt: data.startAt,
            title: data.title,
            priority: data.priority,
            status: data.status,
          },
        },
        user: {
          connect: {
            id: data.userId,
          },
        },
      },
    });
  }
}
