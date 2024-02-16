import { GenezioDeploy, GenezioMethod } from "@genezio/types";


@GenezioDeploy()
export class BackendService {
  readonly secret = "Capybaras are AWESOME! Shhh... don't tell the cats!";

  @GenezioMethod()
  getSecret(): string {
    return this.secret;
  }
}
