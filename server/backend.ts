import { GenezioDeploy, GenezioMethod, GnzContext, GenezioAuth } from "@genezio/types";


@GenezioDeploy()
export class BackendService {
  readonly secret = "Capybaras are AWESOME! Shhh... don't tell the cats!";

  @GenezioMethod()
  @GenezioAuth()
  async getSecret(context: GnzContext): Promise<string> {
    console.log(context.user)
    return this.secret;
  }
}
