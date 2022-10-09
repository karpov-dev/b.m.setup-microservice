import {Injectable} from "@nestjs/common";
import {InvokeChain, InvokeChainItem} from "invoke-chain";
import {IInvokeChainContext} from "invoke-chain";
import {WorkspaceManagement as WM} from "@builderry/types";

@Injectable()
export class SetupService {

  public async setup(setupMicroserviceData: WM.SetupMicroserviceDTO) {
    const chain = new InvokeChain([new InvokeChainItem(SetupService.checkGitDifference, setupMicroserviceData)]);

    return await chain.invoke();
  }

  static checkGitDifference(context: IInvokeChainContext) {
    const isBranchHasDiff = false;

    const nextStep = isBranchHasDiff
      ? new InvokeChainItem(SetupService.pullGitBranch, context.params)
      : new InvokeChainItem(SetupService.runDockerContainer, context.params);

    context.add(nextStep);
  }

  static pullGitBranch(context: IInvokeChainContext) {
    context.add(new InvokeChainItem(SetupService.deleteDockerImage, context.params));
  }

  static deleteDockerImage(context: IInvokeChainContext) {
    context.add(new InvokeChainItem(SetupService.buildDockerImage, context.params));
  }

  static buildDockerImage(context: IInvokeChainContext) {
    context.add(new InvokeChainItem(SetupService.runDockerContainer, context.params));
  }

  static runDockerContainer(context: IInvokeChainContext) {
    return null;
  }

}