import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Task } from "./task.model";
import { CreateTaskDto } from "./dto/create-task.dto";

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);


  // @Post()                  second way
  // createTask(
  //   @Body('title') title: string,
  //   @Body('description') description: string,
  // ): Task {
  //    return this.tasksService.createTask(title, description);
    // console.log('title', title);
    // console.log('description', description);
  }

  // @Post()                   first way to create a task
  // createTask(@Body() body) {
  //   console.log('body', body);
  // }
}
