import {Module} from "@nestjs/common";
import {SetupController} from "./controllers/setup.controller";
import {SetupService} from "./providers/SetupService";

@Module({
  controllers: [SetupController],
  providers: [SetupService]
})
export class SetupModule {}