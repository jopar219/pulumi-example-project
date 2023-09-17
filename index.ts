import * as pulumi from "@pulumi/pulumi";

interface CusotmProviderInputs {
  id: string
}
  
class CustomProvider implements pulumi.dynamic.ResourceProvider {
  async create(inputs: CusotmProviderInputs): Promise<pulumi.dynamic.CreateResult> {
    // code here
    
    return {
      id: `${inputs.id}`
    }
  }
}

export interface CustomResourceInputs {
  id: pulumi.Input<string>
}
  
class CustomResource extends pulumi.dynamic.Resource {
  constructor(name: string, props: CustomResourceInputs, opts?: pulumi.CustomResourceOptions) {
    super(new CustomProvider(), name, props, opts);
  }
}

new CustomResource('name', {
  id: "test"
});
