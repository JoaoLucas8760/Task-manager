import { TaskUserResponseDTO } from '../dtos/taks-user-response.dto';
import { TaskUserRequestDTO } from '../dtos/task-user-request.dto';

export abstract class ITaskUserRepository {
  abstract save(data: TaskUserRequestDTO): Promise<TaskUserResponseDTO>;
}
