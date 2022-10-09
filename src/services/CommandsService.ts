import {promisify} from "util";
import {exec} from "child_process";

export class CommandsService {

  public static async executeFromFileSync(command: string): Promise<string> {
    const executeCommand = promisify(exec);
    const result = await executeCommand(command);

    return result.stdout;
  }

}