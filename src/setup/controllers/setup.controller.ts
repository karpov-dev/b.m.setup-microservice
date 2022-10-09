import {Body, Controller, Post} from '@nestjs/common';
import {WorkspaceManagement as WM} from "@builderry/types";
import {SetupService} from "../providers/SetupService";

@Controller('/setup')
export class SetupController {

  constructor(private readonly setupService: SetupService) {}

  @Post()
  public async setup(@Body() setupMicroserviceData: WM.SetupMicroserviceDTO) {
    return await this.setupService.setup(setupMicroserviceData);
  }

}
